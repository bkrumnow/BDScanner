###############################################################################################################
## scanner.py
## Extracts inline and external script code from page content and analyses the data for bot detection inclusions
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

import BotDetectionPattern
from selenium.common.exceptions import StaleElementReferenceException
from detectionPatterns import DocumentKeysDetectionPatterns, GeneralDetectionPatterns, NavigatorDetectionPatterns, WindowKeysDetectionPatterns
from detection import PatternChecker, Script
from detection import FileManager

class Scanner:
    def __init__(self, driver, visit_id):
        self.scripts = []
        self.scorePatterns = [];
        self.scorePatterns.extend((GeneralDetectionPatterns.GeneralDetectionPatterns(), DocumentKeysDetectionPatterns.DocumentKeysDetectionPatterns(),
        NavigatorDetectionPatterns.NavigatorDetectionPatterns(),WindowKeysDetectionPatterns.WindowKeysDetectionPatterns()))
        self.botDetectionPattern = BotDetectionPattern.BotDetectionPattern()
        self.URLHistory = []
        self.UAPropertyTargeted = False

        self.extractScriptInclusions(driver)

    #extracts inline and external script inclusions
    def extractScriptInclusions(self, driver):
        counter = 1
        if driver:
            for element in driver.find_elements_by_tag_name('script'):
                #Extract internal and external scripts from pages
                try:
                    scriptSrc = element.get_attribute('src')
                except:
                    scriptSrc = None

                if scriptSrc:
                    if scriptSrc in self.URLHistory:
                        continue

                    result = FileManager.downloadFile(scriptSrc)
                    if result:
                        self.analyseCode(result[0], result[1], result[2])
                    self.URLHistory.append(scriptSrc)
                else:
                    try:
                        outerHTML = element.get_attribute('outerHTML')
                        fileName = 'inlineScript' + str(counter) + '.js'
                        self.analyseCode(outerHTML, fileName, fileName)
                        counter = counter +1
                    except StaleElementReferenceException:
                        print 'element became invalid'
                    except:
                        print 'element cannot be targeted'

    #preprocesses script (de-obfuscating and remove comments) and script persistence
    def analyseCode(self, data, identifier, path):
        res = FileManager.preProcessScript(data)
        currentScript = None
        currentScript = self.analysePatterns(currentScript, res, identifier, path)

        if currentScript:
            currentScript.calculateScore(self.UAPropertyTargeted)
            if currentScript.score >= 12:
                currentScript.URL = path

                #now that we have a pattern detected .. is it from a company?
                for companyPattern in self.botDetectionPattern.CompanyPattern:
                    companyResult = PatternChecker.checkPattern(res, companyPattern[1], path)[0]

                    if companyResult:
                        currentScript.addCompanyPattern(companyPattern)

                self.scripts.append(currentScript)
                print("\n@append: %s %s %s" % (len(self.scripts), identifier, currentScript.score))
            else:
                del currentScript

    #Compares script with detection patterns
    def analysePatterns(self, currentScript, res, identifier, path):
        corruptFile = False

        for detectionClass in self.scorePatterns:
            if corruptFile:
                return

            for detectionPattern in detectionClass.patterns:
                for pattern in detectionPattern[2]:
                    #pattern can be a list , tuple or str
                    returnValue = PatternChecker.checkPattern(res, pattern, path)
                    result = returnValue[0]

                    if result == -1: #File contents is corrupt skip this file
                        corruptFile = True
                        return

                    if (result):
                        if currentScript == None:
                            currentScript = Script.Script(identifier, res)

                        detectionTopic = detectionClass.name + '_' + detectionPattern[1]
                        if detectionTopic == 'NavigatorAttr_UserAgent':
                            self.UAPropertyTargeted = True

                        currentScript.addDetectionPattern(detectionTopic, returnValue[1], detectionPattern[0])
        return currentScript