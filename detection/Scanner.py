import urllib2, httplib
import jsbeautifier
import json, gzip
import StringIO
import re, binascii
import os
from datetime import datetime
from detection import PatternChecker, Script

with open('detection/Patterns.json') as data_file:
   patterns = json.load(data_file)

class Scanner:
    scripts = []
    visitId = None
    def scan(self, driver, visit_id):
        self.visitId = visit_id
        #LOCAL FILES
#        src = 'file:detection/zwxsutztwbeffxbyzcquv.js'
        #src = 'file:detection/unknownhex.js'
#        src = 'https://dev.visualwebsiteoptimizer.com/2.0/va-33a5ce6d810338ed1c4d5ec7d320b624.js'
#        self.downloadFile(src)
#        src = 'file:detection/async.js'
#        self.downloadFile(src)

        #Scan Main page Source
        pageSource = driver.page_source
        self.analyse(pageSource, 'index.html', 'index.html')

        counter = 1
        for element in driver.find_elements_by_tag_name('script'):
            #Scan internal and external script contents
            scriptSrc = element.get_attribute('src')

            if scriptSrc:
                self.downloadFile(scriptSrc)
            else:
                outerHTML = element.get_attribute('outerHTML')
                fileName = 'inlineScript' + str(counter)
                self.analyse(outerHTML, fileName, fileName)
                counter = counter +1

    def downloadFile(self, src):
        try:
            response = urllib2.urlopen(src)
            data = response.read()
            contentEncoding = response.info().getheader('Content-Encoding')
        except:
            print("Could not open: %s" % src)
            return

        print("source %s %s" % (src, contentEncoding))
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
            html = data

        if html:
            #print("download %s %s %s" % (src, counter, html[:8]))
            self.analyse(html, src.split('/')[-1], src)
        else:
            print("No content found %s" % (src))


    def analyse(self, data, identifier, path):
        try:
            res = jsbeautifier.beautify(data)
        except:
            print("Could not beautify %s" % (identifier))
            res = data

        currentScript = None
        currentScript = self.analysePatterns(currentScript, res, identifier, path)

        #hexadecimal
        try:
            hexPattern = r'\\x([0-9A-Fa-f]{2})'
            regex = re.compile(hexPattern, re.IGNORECASE)
            hexTranslated = ''
            for match in regex.finditer(data):
                hexCharacter = match.group(1)

                try:
                    translatedCharacter = binascii.unhexlify(hexCharacter).decode('utf-8');
                except:
                    translatedCharacter = hexCharacter
                    print("Could not unhexlify: %s" % (hexCharacter))

                #print("hexfound %s %s %s %s" % (match.group(), hexCharacter, match.group(1), binascii.unhexlify(hexCharacter)))

                hexTranslated = hexTranslated + translatedCharacter

            if len(hexTranslated) > 0:
                print("Hex Translated: %s" % (len(hexTranslated)))
                self.analysePatterns(currentScript, hexTranslated, identifier, path)
        except:
            print('Exception while analysing for hexdecimal content')

        if currentScript:
            currentScript.URL = path
            self.scripts.append(currentScript)
            self.writeFile(identifier, res, str(self.visitId) + '/')


    def analysePatterns(self, currentScript, res, identifier, path):
        patternTopics = ["Distil", "Captcha", "WebBot", "Browser"] #["Distil", "Captcha", "WebBot", "Navigator", "Browser", "Graphics"]
        corruptFile = False
        for topic in patternTopics:
            if corruptFile:
                return

            for searchPatternTopic in patterns['searchPatterns'][topic]:
                searchpattern = searchPatternTopic.lower()
                result = PatternChecker.checkPattern(res.lower(), searchpattern, path)
                if result == -1:
                    corruptFile = True
                    return

                if (result):
                    if currentScript == None:
                        currentScript = Script.Script(identifier)
                    currentScript.addDetectionPattern(topic, searchpattern)
        return currentScript


    def insertScript(self, sock, id, visit_id, identifier, URL):
        try:
            query = ("INSERT INTO Scripts (id, visit_id, name, URL, level) VALUES (?,?,?,?,?)",
            (id, visit_id, identifier, URL, 0))
            sock.send(query)
        except:
            print("Error inserting script record %s %s" % (identifier, id))

    def insertDetection(self,sock, scriptId, topic, pattern):
        try:
            query = ("INSERT INTO DetectionPatterns (script_id, topic, pattern, value) VALUES (?,?,?,?)",
            (scriptId, topic, pattern, ''))
            sock.send(query)
        except:
            print("Error inserting detection record %s %s %s" % (scriptId, topic, pattern))

    def persistResults(self, sock, visit_id, manager_params):
        for script in self.scripts:
            scriptId = str(visit_id) + '_' + script.identifier
            self.insertScript(sock, scriptId, visit_id, script.identifier, script.URL)
            for key, value in script.detectionPatterns.iteritems():
                self.insertDetection(sock, scriptId, key, ','.join(value))

    def writeFile(self, name, data, prefix=''):
        path = '/home/osboxes/OpenWPM/detection/files/' +prefix
        try:
            os.makedirs(path)
        except:
            pass

        try:
            with open(path + name, 'w') as file:
                file.write(data.encode('utf-8'))
        except:
            print("Could not write file %s" % name)