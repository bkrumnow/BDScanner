###############################################################################################################
## FileManager.py
## Responsible for all file operations (dowloading , de-obfuscating and writing to disk)
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

import requests
import urllib
from io import StringIO
import gzip
import sys
import json
import os
import random
#import jsbeautifier
import re
import binascii
from detection import PatternChecker

# load config file
config = {}
with open(os.path.join('detection/configuration','config.json')) as json_data_file:
    config = json.load(json_data_file)

# downloads the file and if necessary de-compresses the content of the HTTP request and parses content format
def downloadFile(url):
        data = ''
        # TODO: Needs to be switched with a recent user agent each start
        http_header = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
               'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
               'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
               'Accept-Encoding': 'none',
               'Accept-Language': 'en-US,en;q=0.8',
               'Connection': 'keep-alive'}

        # A src attribute may not contain a http(s) prefix
        if url.startswith('//'):
            url = 'http:' + url
               
        try:
            r = requests.get(url, headers=http_header)
        except requests.exceptions.RequestException as e:
            print("Could not open: {} {}".format(url, e, sys.exc_info()[0]))
            return

        data = r.content
        contentEncoding = r.encoding


        if data == None:
            print("No content found {}".format(url))
            return data

        fileName = _extractFileName(url)
        content = decodeData(data)

        # Exclude common scripts, that are known frameworks and should not do bot detection. Currently: JQuery, bootstrap and underscore
        if not PatternChecker.analyse(fileName, config['excludeFiles'], 'FileManagerExludeFiles', True, True):
           return (content, fileName, url)

        return None

def preProcessScript(data):
    """ Preprocess rawdata : 1 remove comment 2 convert hexadecimal contents
        :param data: JavaScript file? 
    """
#        try:
#            res = jsbeautifier.beautify(data)
#        except:
#            print("Could not beautify %s" % (identifier))
#            res = data

    #Remove comments
    try:
        res = re.sub("(?:\/\*(?:[\s\S]*?)\*\/)|(?:^\s*\/\/(?:.*)$)","" ,data, flags=re.MULTILINE)
    except:
        print("Error while removing script comment: %s " % (sys.exc_info()[0]))
        res = data

    try:
        regObj = re.compile(r'\\x(\w{2})')
        res = regObj.sub(asciirepl, res)
    except:
        res = res
    return res
    
def remove_comments(data):
    """ Removes comments from JavaScript files
    """
    try:
        return re.sub("(?:\/\*(?:[\s\S]*?)\*\/)|(?:^\s*\/\/(?:.*)$)","" ,data, flags=re.MULTILINE)
    except:
        print("Error while removing script comment: %s " % (sys.exc_info()[0]))
        return data
     

def convert_hexadecimal(data):
    """ Converts hexadecimal literals in scripts to readable/comparable ASCII strings 
    """    
    try:
        regObj = re.compile(r'\\x(\w{2})')
        res = regObj.sub(asciirepl, res)
    except:
        res = res
    return res

# regex helper function to replace the hexadecimal characters with ascii characters
def asciirepl(match):
    value = ''
    try:
        s = match.group(1)
        try:
            value = binascii.unhexlify(s).decode('utf-8')
        except:
            try:
                value = binascii.unhexlify(s).decode('latin-1')
            except:
                value = '\\x' + s
    except:
        print("[De-Obf]Error obtaining match group")

    return value


def persistFile(name, data, path):
    """ Write the data to a file on the file system by the given path
    :param name:
    :param data:
    :param path:
    """
    try:
        os.makedirs(path)
    except:
        pass

    try:
        with open(path + name, 'w') as file:
            file.write(data.encode('utf-8'))
    except TypeError:
        try:
            with open(path + name, 'w') as file:
                file.write(data)
        except Exception as e:
            print("Could not write file {}: {}".format(name, e))

def decodeData(data):
    try:
        content = data.decode('utf-8')
    except:
        try:
            content = data.decode('latin-1')
        except:
            content = data

    return content

def _extractFileName(src):
    """ Extract filename from src attribute
    :param src:
    """
    if src.endswith('/'):
        src = src[:-1]
    if src.endswith('.js'): # It cuts off first, to avoid strings such as file.j or file. 
        src = src[:-3]
        
    fileName = src.split('/')[-1];
    
    if fileName:
        fileName = fileName[:20] +'.js';
        
        if not fileName.endswith('.js'):
             fileName = fileName + '.js';

        # Virtual box limitation, files containing a question mark cannot be copied to host machine
        fileName = fileName.replace('?', '-')
        # Can be a problem with some systems
        fileName = fileName.replace('&', '-')
    else:
        fileName = 'script_johndoe_' + str(random.randint(1,1003)*3);
        
    return fileName