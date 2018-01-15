import urllib2
import jsbeautifier
import json

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
        response = urllib2.urlopen(src)
        html = response.read()

        if html:
            #print("download %s %s %s" % (src, counter, html[:8]))
            self.analyse(html, src.split('/')[-1])
        else:
            print("could not download " % (src))


    def analyse(self, data, identifier):
        print("@@Analyse", identifier)

        #beautifier
        try:
            res = jsbeautifier.beautify(data)
        except:
            print("error beautifying %s" % (identifier))
            res = data

        #pattern matching
        patternTopics = ["Distil", "Captcha", "WebBot", "Navigator", "Browser", "Graphics"]

        for topic in patternTopics:
            for searchTopic in patterns['searchPatterns'][topic]:
                print("Search pattern %s" % (searchTopic))