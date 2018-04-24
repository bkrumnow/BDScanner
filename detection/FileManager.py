import urllib2, httplib
import StringIO
import gzip
import sys
#import jsbeautifier
import re, binascii

def downloadFile(src, scanner):
        data = ''
        try:
            hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
                   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                   'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
                   'Accept-Encoding': 'none',
                   'Accept-Language': 'en-US,en;q=0.8',
                   'Connection': 'keep-alive'}
            req = urllib2.Request(src, headers=hdr)

            response = urllib2.urlopen(req)
            CHUNK = 16 * 1024
            while True:
                chunk = response.read(CHUNK)
                if not chunk:
                    break
                data = data + chunk;

            contentEncoding = response.info().getheader('Content-Encoding')
        except:
            print("Could not open: %s %s" % (src,sys.exc_info()[0]))
            return

        if contentEncoding:
            try:

                if contentEncoding.lower() == 'gzip':
                    compressedstream = StringIO.StringIO(data)
                    unzipper = gzip.GzipFile(fileobj=compressedstream)
                    data = unzipper.read()
                else:
                    print "Not supported encoding %s"  % contentEncoding
            except:
                print("Not able to de-compress content %s" % (src))

        if data:
            try:
                html = data.decode('utf-8')
            except:
                try:
                    html = data.decode('latin-1')
                except:
                    html = data

            if src.endswith('/'):
                src = src[:-1]

            fileName = src.split('/')[-1];
            if fileName:
                if not fileName.endswith('.js'):
                    fileName = fileName[:20] + '.js';
                else:
                    fileName = fileName[:20]

                scanner.analyse(html, fileName, src)
            else:
                print("Filename could not be extracted %s" % (src))
        else:
            print("No content found %s" % (src))

def asciirepl(match):
    # replace the hexadecimal characters with ascii characters
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

def preProcessScript(data):
#        try:
#            res = jsbeautifier.beautify(data)
#        except:
#            print("Could not beautify %s" % (identifier))
#            res = data

    #Remove comment
    try:
        res = re.sub("(?:\/\*(?:[\s\S]*?)\*\/)|(?:^\s*\/\/(?:.*)$)","" ,data, flags=re.MULTILINE)
    except:
        print("Error while removing script comment: %s " % (sys.exc_info()[0]))
        res = data

    obfuscated = False
    try:
        regObj = re.compile(r'\\x(\w{2})')
        res = regObj.sub(asciirepl, res)
        obfuscated =  len(data) != len(res)
    except:
        res = res
    return (res, obfuscated)