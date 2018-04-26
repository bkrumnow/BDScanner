import json
import os, sys
import BotDetectionPattern
from detectionPatterns import DocumentKeysDetectionPatterns, GeneralDetectionPatterns, NavigatorDetectionPatterns, WindowKeysDetectionPatterns
from detection import PatternChecker, Script, ScoreCalculator
from detection import FileManager
from detection.honeypots import HoneypotScanner

class Scanner:
    def __init__(self, db, driver, visit_id):
        self.db = db
        self.scripts = []
        self.visitId = visit_id
        self.scorePatterns = [];
        self.scorePatterns.extend((GeneralDetectionPatterns.GeneralDetectionPatterns(), DocumentKeysDetectionPatterns.DocumentKeysDetectionPatterns(),
        NavigatorDetectionPatterns.NavigatorDetectionPatterns(),WindowKeysDetectionPatterns.WindowKeysDetectionPatterns()))
        self.botDetectionPattern = BotDetectionPattern.BotDetectionPattern()
        self.visitUrls = []

        #Scan Main page Source (innerscripts are already seperated no use )
        #pageSource = driver.page_source
        #self.analyse(pageSource, 'index.html', 'index.html')

        counter = 1

        honeypotScanner = HoneypotScanner.HoneypotScanner(visit_id)

        honeypotScanner.scan(driver);

        fingerprint = False

        if fingerprint:
            for element in driver.find_elements_by_tag_name('script'):
                #Scan internal and external script contents

                try:
                    scriptSrc = element.get_attribute('src')
                except:
                    scriptSrc = None

    #            if counter > 4:
    #                self.db.scripts = self.scripts
    #                return;

                if scriptSrc:
    #                counter = counter +1
                    if scriptSrc in self.visitUrls:
                        continue

                    FileManager.downloadFile(scriptSrc, self)
                    self.visitUrls.append(scriptSrc)
                else:
                    outerHTML = element.get_attribute('outerHTML')
                    fileName = 'inlineScript' + str(counter) + '.js'
                    self.analyse(outerHTML, fileName, fileName)
                    counter = counter +1

        self.db.scripts = self.scripts

    def analyse(self, data, identifier, path):
        processedScript = FileManager.preProcessScript(data)
        res = processedScript[0]

        currentScript = None
        currentScript = self.analysePatterns(currentScript, res, identifier, path)

        if currentScript:
            currentScript.calculateScore()

            if currentScript.score >= 12:
                currentScript.obfuscated = processedScript[1]
                currentScript.URL = path

                #now that we have a pattern detected .. is it from a company?
                for companyPattern in self.botDetectionPattern.CompanyPattern:
                    companyResult = PatternChecker.checkPattern(res, companyPattern[1], path, True, False)

                    if companyResult:
                        currentScript.addCompanyPattern(companyPattern)

                self.scripts.append(currentScript)
                print("\n@append: %s %s %s" % (len(self.scripts), identifier, currentScript.score))
            else:
                del currentScript

    def analysePatterns(self, currentScript, res, identifier, path):
        corruptFile = False
        print "."

        for detectionClass in self.scorePatterns:
            if corruptFile:
                return

            for detectionPattern in detectionClass.patterns:
                for pattern in detectionPattern[2]: #todo can this be more efficient?
                    #pattern can be a list , tuple or str
                    result = PatternChecker.checkPattern(res, pattern, path)
                    if result == -1: #File contents is corrupt skip this file
                        corruptFile = True
                        return

                    if (result):
                        if currentScript == None:
                            currentScript = Script.Script(identifier, res)

                        currentScript.addDetectionPattern(detectionClass.name + '_' + detectionPattern[1], ','.join(pattern), detectionPattern[0])

        return currentScript