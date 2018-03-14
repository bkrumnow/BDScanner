import urllib2, httplib
import jsbeautifier
import json, gzip
import StringIO
import re, binascii
import os
import random
import BotDetectionPattern
from datetime import datetime
from detection import PatternChecker, Script

#with open('detection/Patterns.json') as data_file:
#   patterns = json.load(data_file)

class Scanner:


    def __init__(self):
        self.scripts = []
        self.visitId = None
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

            if scriptSrc:
                self.downloadFile(scriptSrc)
            else:
                outerHTML = element.get_attribute('outerHTML')
                fileName = 'inlineScript' + str(counter)
                self.analyse(outerHTML, fileName, fileName)
                counter = counter +1

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
            #print("download %s %s" % (src, html[:8]))
            self.analyse(html, src.split('/')[-1], src)
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
        try:
            res = jsbeautifier.beautify(data)
        except:
            print("Could not beautify %s" % (identifier))
            res = data

        try:
            res = self.reformat_content(res)
        except:
            res = res

        currentScript = None
        currentScript = self.analysePatterns(currentScript, res, identifier, path)

        if currentScript:
            currentScript.URL = path

            self.scripts.append(currentScript)
            print("append@@@ %s" % len(self.scripts))
            self.writeFile(identifier, res, str(self.visitId) + '/')

    def analysePatterns(self, currentScript, res, identifier, path):
        #patternTopics = ["Companies", "Captcha", "WebBot", "Browser", "Graphics"]
        patternTopics = ["Captcha", "WebBot", "Browser", "Graphics", "CompanyPattern"]
        corruptFile = False
        print('analyse patterns %s' % identifier[:15])
        lowerRes = res.lower();
        for topic in patternTopics:
            if corruptFile:
                return

            for searchPatternTopic in getattr(self.botDetectionPattern, topic):
                if topic == "CompanyPattern":
                    pattern = searchPatternTopic[1]
                else:
                    pattern = [searchPatternTopic]

                result = PatternChecker.checkPattern(res, pattern, path)
                if result == -1:
                    corruptFile = True
                    return

                if (result):
                    if currentScript == None:
                        currentScript = Script.Script(identifier)

                    if topic == "CompanyPattern":
                        currentScript.addCompanyPattern(searchPatternTopic)
                    else:
                        currentScript.addDetectionPattern(topic, searchPatternTopic)
        return currentScript


    def insertScript(self, sock, id, visit_id, identifier, URL):
        try:
            query = ("INSERT INTO Scripts (id, visit_id, name, URL, level) VALUES (?,?,?,?,?)",
            (id, visit_id, identifier, URL, 0))
            sock.send(query)
        except:
            print("Error inserting script record %s %s" % (identifier, id))

    def insertDetection(self,sock, scriptId, topic, pattern, company):
        try:
            query = ("INSERT INTO DetectionPatterns (script_id, topic, pattern, value, company) VALUES (?,?,?,?,?)",
            (scriptId, topic, pattern, '', company))
            sock.send(query)
        except:
            print("Error inserting detection record %s %s %s" % (scriptId, topic, pattern))

    def persistResults(self, sock, visit_id, manager_params):
        print('PERSIST SCRIPTS %s' % len(self.scripts))
        #print('self %s' % self)
        for script in self.scripts:
            scriptId = str(visit_id) + '_' + script.identifier + '_' + str(random.randint(1,101)*5)
            self.insertScript(sock, scriptId, visit_id, script.identifier, script.URL)
            for key, value in script.detectionPatterns.iteritems():
                self.insertDetection(sock, scriptId, key, ','.join(value), ','.join(script.companyPatterns))

    def writeFile(self, name, data, prefix=''):
        path = '/home/osboxes/OpenWPM/detection/files/' +prefix
        try:
            os.makedirs(path)
        except:
            pass

        try:
            with open(path + name[:14], 'w') as file:
                file.write(data.encode('utf-8'))
        except:
            print("Could not write file %s" % name)

    def printScripts(self):
        for script in self.scripts:
            print ("Company %s" % script.companyPatterns)
            for key, value in script.detectionPatterns.iteritems():
                print("Key Value %s %s" % (key, ','.join(value)))