import urllib2, httplib
import jsbeautifier
import json, gzip
import StringIO
import re, binascii
from datetime import datetime
from detection import PatternChecker, Script

with open('detection/Patterns.json') as data_file:
   patterns = json.load(data_file)

class Scanner:
    scripts = []
    def scan(self, driver):
        #Scan Main page Source
        pageSource = driver.page_source
        self.analyse(pageSource, 'index.html', 'index.html')

        #src = 'file:detection/zwxsutztwbeffxbyzcquv.js'
        src = 'file:detection/unknownhex.js'
#        src = 'https://dev.visualwebsiteoptimizer.com/2.0/va-33a5ce6d810338ed1c4d5ec7d320b624.js'
        self.downloadFile(src)
        return;

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

        response = urllib2.urlopen(src)
#        opener = urllib2.build_opener(HTTPSClientAuthHandler('/home/osboxes/OpenWPM/detection/visualwebsiteoptimizercom.pem', '/home/osboxes/OpenWPM/detection/visualwebsiteoptimizercom.pem.') )
#        response = opener.open(src)

        data = response.read()
        contentEncoding = response.info().getheader('Content-Encoding')

        if contentEncoding and (contentEncoding.lower() == 'gzip'):
           compressedstream = StringIO.StringIO(data)
           unzipper = gzip.GzipFile(fileobj=compressedstream)
           data = unzipper.read()

        try:
            html = data.decode('utf-8')
        except:
            html = data

        try:
            import ssl
        except ImportError:
            print "error: no ssl support"

        print("source %s %s" % (src, contentEncoding))
        if html:
            #print("download %s %s %s" % (src, counter, html[:8]))
            self.analyse(html, src.split('/')[-1], src)
        else:
            print("could not download " % (src))


    def analyse(self, data, identifier, path):
        #print("Analyse %s" % (identifier))
        #beautifier

        try:
            res = jsbeautifier.beautify(data)
        except:
            print("error beautifying %s" % (identifier))
            res = data

        currentScript = None
        currentScript = self.analysePatterns(currentScript, res, identifier, path)

        #hexadecimal
        hexPattern = r'\\x([0-9A-Fa-f]{2})'
        regex = re.compile(hexPattern, re.IGNORECASE)
        hexTranslated = ''
        for match in regex.finditer(data):
            hexCharacter = match.group(1)

            try:
                translatedCharacter = binascii.unhexlify(hexCharacter);
            except:
                print("error")

            print("fjdklja %s" % type(binascii.unhexlify(hexCharacter)));
            #print("hexfound %s %s %s %s" % (match.group(), hexCharacter, match.group(1), binascii.unhexlify(hexCharacter)))

            hexTranslated = hexTranslated + translatedCharacter


        if len(hexTranslated) > 0:
            self.writeFile('before', data);
            self.writeFile('after', hexTranslated);
            self.analysePatterns(currentScript, hexTranslated, identifier, path)


        if currentScript:
            currentScript.URL = path
            self.scripts.append(currentScript)


    def analysePatterns(self, currentScript, res, identifier, path):
        patternTopics = ["WebBot"] # ["Distil", "Captcha", "WebBot", "Navigator", "Browser", "Graphics"]
        corruptFile = False
        for topic in patternTopics:
            if corruptFile:
                return

            for searchPatternTopic in patterns['searchPatterns'][topic]:
                result = PatternChecker.checkPattern(res.lower(), searchPatternTopic.lower(), path)
                if result == -1:
                    corruptFile = True
                    return

                if (result):
                    if currentScript == None:
                        currentScript = Script.Script(identifier)
                    currentScript.addDetectionPattern(topic, searchPatternTopic.lower())
            return
        return currentScript


    def insertScript(self, sock, id, visit_id, identifier, URL):
        query = ("INSERT INTO Scripts (id, visit_id, name, URL, level) VALUES (?,?,?,?,?)",
        (id, visit_id, identifier, URL, 0))
        sock.send(query)

    def insertDetection(self,sock, scriptId, topic, pattern):
        query = ("INSERT INTO DetectionPatterns (script_id, topic, pattern, value) VALUES (?,?,?,?)",
        (scriptId, topic, pattern, ''))
        sock.send(query)

    def persistResults(self, sock, visit_id, manager_params):
        for script in self.scripts:
            scriptId = str(visit_id) + '_' + script.identifier
            print("ScriptId %s" % (scriptId));
            #print("Script %s " % (script.identifier))
            self.insertScript(sock, scriptId, visit_id, script.identifier, script.URL)
            for key, value in script.detectionPatterns.iteritems():
                self.insertDetection(sock, scriptId, key, ''.join(value))

    def writeFile(self, name, data):
        with open('/home/osboxes/OpenWPM/detection/' + name, 'w') as file:
            file.write(data)