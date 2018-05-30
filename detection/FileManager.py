###############################################################################################################
## FileManager.py
## Responsible for all file operations (dowloading , de-obfuscating and writing to disk)
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

import urllib2
import StringIO
import gzip
import sys
import json
import os
import random
#import jsbeautifier
import re, binascii
from detection import PatternChecker

# load config file
config = {}
with open(os.path.join('detection/configuration','config.json')) as json_data_file:
    config = json.load(json_data_file)

# downloads the file and if necessary de-compresses the content of the HTTP request and parses content format
def downloadFile(src):
        data = ''
        try:
            hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
                   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                   'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
                   'Accept-Encoding': 'none',
                   'Accept-Language': 'en-US,en;q=0.8',
                   'Connection': 'keep-alive'}

            # A src attribute may not contain a http(s) prefix
            if src.startswith('//'):
                src = 'http:' + src

            req = urllib2.Request(src, headers=hdr)

            response = urllib2.urlopen(req)
            CHUNK = 16 * 1024
            while True:
                chunk = response.read(CHUNK)
                if not chunk:
                    break
                data = data + chunk;

            contentEncoding = response.info().getheader('Content-Encoding')
        except urllib2.URLError, e:
            print ("Could not open: %s %s" % (src,e))
            return
        except:
            print("Could not open: %s %s" % (src,sys.exc_info()[0]))
            return

        if data == None:
            print("No content found %s" % (src))
            return data

        fileName = extractFileName(src)

        #de-compress http request content
        if contentEncoding:
            data = decompressData(data, contentEncoding, fileName)

        # decode contents
        content = decodeData(data)


        if not PatternChecker.analyse(fileName, config['excludeFiles'], 'FileManagerExludeFiles', True, True):
           return (content, fileName, src)

        return None

#Preprocess rawdata : 1 remove comment 2 convert hexadecimal contents
def preProcessScript(data):
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
        print "[De-Obf]Error obtaining match group"

    return value

# write the data to a file on the file system by the given path
def persistFile(name, data, path):
    try:
        os.makedirs(path)
    except:
        pass

    try:
        with open(path + name, 'w') as file:
            file.write(data.encode('utf-8'))
    except:
        print("Could not write file %s" % name)

def decompressData(data, contentEncoding, fileName):
    print '@@COMpress',fileName
    try:
        if contentEncoding.lower() == 'gzip':
            compressedstream = StringIO.StringIO(data)
            unzipper = gzip.GzipFile(fileobj=compressedstream)
            data = unzipper.read()
            print 'victory'
        else:
            print "Not supported encoding %s"  % contentEncoding
    except:
        print("Not able to de-compress content %s" % (fileName))

    return data

def decodeData(data):
    try:
        content = data.decode('utf-8')
    except:
        try:
            content = data.decode('latin-1')
        except:
            content = data

    return content

#extract filename from src attribute
def extractFileName(src):
    if src.endswith('/'):
        src = src[:-1]

    fileName = src.split('/')[-1];
    if fileName:
        if not fileName.endswith('.js'):
            fileName = fileName[:20] + '.js';
        else:
            fileName = fileName[:20]

        #Virtual box limitation, files containing a question mark cannot be copied to host machine
        fileName = fileName.replace('?', '-')
    else:
        fileName = 'script_johndoe_' + str(random.randint(1,1003)*3);

    return fileName