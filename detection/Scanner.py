import urllib2
import jsbeautifier
import json
import re, binascii
from detection import PatternChecker

with open('detection/Patterns.json') as data_file:
   patterns = json.load(data_file)

class Scanner:
    def scan(self, driver):
        #Scan Main page Source
        pageSource = driver.page_source
        self.analyse(pageSource, 'index.html')

        counter = 0
        for element in driver.find_elements_by_tag_name('script'):
            #Scan internal and external script contents
            scriptSrc = element.get_attribute('src')

            if scriptSrc:
                self.downloadFile(scriptSrc, counter)
            else:
                outerHTML = element.get_attribute('outerHTML')
                self.analyse(outerHTML, 'inlineScript' + str(counter))
            counter = counter + 1

    def downloadFile(self, src, counter):
        #'https://www.stubhub.com/zwxsutztwbeffxbyzcquv.js'
        response = urllib2.urlopen('file:detection/zwxsutztwbeffxbyzcquv.js')
        html = response.read().decode('utf-8')

        if html:
            #print("download %s %s %s" % (src, counter, html[:8]))
            self.analyse(html, src.split('/')[-1])
        else:
            print("could not download " % (src))


    def analyse(self, data, identifier):
        #print("Analyse %s" % (identifier))
        #beautifier
        try:
            res = jsbeautifier.beautify(data)
        except:
            print("error beautifying %s" % (identifier))
            res = data

        #pattern matching
        patternTopics = ["WebBot"] # ["Distil", "Captcha", "WebBot", "Navigator", "Browser", "Graphics"]

        for topic in patternTopics:
            for searchPatternTopic in patterns['searchPatterns'][topic]:
                if (PatternChecker.checkPattern(res.lower(), searchPatternTopic.lower())):
                    print("Search pattern %s" % (searchPatternTopic))

        #hexadecimal
        hexPattern = r'\\x([0-9A-Fa-f]{2})'
        #m = re.search(hexaPattern, data)
        regex = re.compile(hexPattern, re.IGNORECASE)
        hexTranslated = ''
        for match in regex.finditer(data):
            hexCharacter = match.group(1)
            hexTranslated += binascii.unhexlify(hexCharacter)

        if len(hexTranslated) > 0:
            self.analyse(hexTranslated, identifier)