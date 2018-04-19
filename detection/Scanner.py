import urllib2, httplib
import jsbeautifier
import json, gzip
import StringIO
import re, binascii
import os, sys
import BotDetectionPattern
from detectionPatterns import DocumentKeysDetectionPatterns, GeneralDetectionPatterns, NavigatorDetectionPatterns, WindowKeysDetectionPatterns
from detection import PatternChecker, Script, ScoreCalculator

class Scanner:
    def __init__(self, db):
        self.db = db
        self.scripts = []
        self.visitId = None
        self.scorePatterns = [];
        self.scorePatterns.extend((GeneralDetectionPatterns.GeneralDetectionPatterns(), DocumentKeysDetectionPatterns.DocumentKeysDetectionPatterns(),
        NavigatorDetectionPatterns.NavigatorDetectionPatterns(),WindowKeysDetectionPatterns.WindowKeysDetectionPatterns()))
        self.botDetectionPattern = BotDetectionPattern.BotDetectionPattern()

    def scan(self, driver, visit_id):
        self.visitId = visit_id

        #Scan Main page Source (innerscripts are already seperated no use )
        #pageSource = driver.page_source
        #self.analyse(pageSource, 'index.html', 'index.html')

        counter = 1
        for element in driver.find_elements_by_tag_name('script'):
            #Scan internal and external script contents

            try:
                scriptSrc = element.get_attribute('src')
            except:
                print("Error while obtaining src element attribute");

#            if counter > 4:
#                self.db.scripts = self.scripts
#                return;

            if scriptSrc:
#                counter = counter +1
                self.downloadFile(scriptSrc)
            else:
                outerHTML = element.get_attribute('outerHTML')
                fileName = 'inlineScript' + str(counter) + '.js'
                self.analyse(outerHTML, fileName, fileName)
                counter = counter +1

        self.db.scripts = self.scripts

    def downloadFile(self, src):
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
            import sys
            print("Could not open: %s %s" % (src,sys.exc_info()[0]))
            return

        if contentEncoding and (contentEncoding.lower() == 'gzip'):
            try:
                compressedstream = StringIO.StringIO(data)
                unzipper = gzip.GzipFile(fileobj=compressedstream)
                data = unzipper.read()
            except:
                print("Not able to de-compress content %s" % (src))

        try:
            html = data.decode('utf-8')
        except:
            try:
                html = data.decode('latin-1')
            except:
                html = data

        if html:
            if src.endswith('/'):
                src = src[:-1]

            fileName = src.split('/')[-1];
            if fileName:
                if not fileName.endswith('.js'):
                    fileName = fileName[:20] + '.js';
                else:
                    fileName = fileName[:20]

                self.analyse(html, fileName, src)
            else:
                print("Filename could not be extracted %s" % (src))
        else:
            print("No content found %s" % (src))


    def asciirepl(self, match):
        # replace the hexadecimal characters with ascii characters
        s = match.group(1)
        value = ''
        try:
            value = binascii.unhexlify(s)
        except:
            value = '\\x' + s

        return value

    def reformat_content(self, data):
        p = re.compile(r'\\x(\w{2})')
        return p.sub(self.asciirepl, data)

    def analyse(self, data, identifier, path):
        obfuscated = False
        try:
            res = jsbeautifier.beautify(data)
        except:
            print("Could not beautify %s" % (identifier))
            res = data

        try:
            res = self.reformat_content(res)
            obfuscated = True
        except:
            res = res

        currentScript = None
        currentScript = self.analysePatterns(currentScript, res, identifier, path)

        if currentScript:
            currentScript.obfuscated = obfuscated
            currentScript.URL = path
            ScoreCalculator.calculateScore(currentScript)

            if currentScript.score >= 12:
              #now that we have a pattern detected .. is it from a company?
                for companyPattern in self.botDetectionPattern.CompanyPattern:
                    companyResult = PatternChecker.checkPattern(res, companyPattern[1], path, True)

                    if companyResult:
                        currentScript.addCompanyPattern(companyPattern)

                self.scripts.append(currentScript)
                print("append@@@ %s %s %s" % (len(self.scripts), identifier, currentScript.score))

                self.db.writeFile(identifier, res, str(self.visitId) + '/')

    def analysePatterns(self, currentScript, res, identifier, path):
        corruptFile = False
        print('analyse patterns %s' % identifier)

        for detectionClass in self.scorePatterns:
            if corruptFile:
                return

            for detectionPattern in detectionClass.patterns:
                for pattern in detectionPattern[2]: #todo can this be more efficient
                    ignoreCase = True
                    patternType = type(pattern)
                    if (patternType is tuple):
                        pattern = pattern[0];
                        ignoreCase = False

                    if type(pattern) is str:
                        valueToCheck = [pattern]
                    else:
                        valueToCheck = pattern
                        pattern = ','.join(pattern)

                    result = PatternChecker.checkPattern(res, valueToCheck, path, ignoreCase)
                    if result == -1:
                        corruptFile = True
                        return

                    if (result):
                        if currentScript == None:
                            currentScript = Script.Script(identifier)

                        currentScript.addDetectionPattern(detectionClass.name + '_' + detectionPattern[1], pattern, detectionPattern[0])

        return currentScript