###############################################################################################################
## scanner.py
## Extracts inline and external script code from page content and analyses the data for bot detection inclusions
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

from selenium.common.exceptions import StaleElementReferenceException
from detection.detectionPatterns import DetectorPatterns
from detection.detectionPatterns import BotFingerprintingSurface
from detection.detectionPatterns import BrowserFingerprints
from detection.detectionPatterns import ManuallyFoundLiterals
from detection import PatternChecker, Script
from detection import FileManager

class Scanner:
    def __init__(self, driver, visit_id):
        self.scripts = []
        self.detectionPatterns = [];
        self.manuallyFoundLiterals = ManuallyFoundLiterals.ManuallyFoundLiterals()
        self.URLHistory = []

        self.initDetectionPatterns()
        self.extractScriptInclusions(driver)

    #register detection patterns
    def initDetectionPatterns(self):
        self.detectionPatterns.extend((DetectorPatterns.DetectorPatterns(),
        BotFingerprintingSurface.BotFingerprintingSurface(),
        BrowserFingerprints.BrowserFingerprints()))

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
                        print('element became invalid')
                    except:
                        print('element cannot be targeted')

    #preprocesses script (de-obfuscating and remove comments) and script persistence
    def analyseCode(self, data, identifier, path):
        res = FileManager.preProcessScript(data)
        currentScript = None
        currentScript = self.analysePatterns(currentScript, res, identifier, path)

        if currentScript:
            currentScript.calculateDetectionValue()
            if currentScript.score >= 12:
                currentScript.URL = path

#                now that we have a pattern detected .. is it a familiar one (only for non-knowndetection patterns)?
                if currentScript.checkForRepeatingPatterns:
                    for pattern in self.manuallyFoundLiterals.patterns:
                        result = PatternChecker.checkPattern(res, pattern[1], path)[0]

                        if result:
                            currentScript.addRepeatingPattern(pattern)

                self.scripts.append(currentScript)
                print("\n@append: %s %s %s" % (len(self.scripts), identifier, currentScript.score))
            else:
                del currentScript

    #Compares script with detection patterns
    def analysePatterns(self, currentScript, res, identifier, path):
        stop = False

        for detectionPattern in self.detectionPatterns:
            if stop:
                return

            for pattern in detectionPattern.patterns:
                for regEx in pattern.patterns:
                    #pattern can be a list , tuple or str
                    returnValue = PatternChecker.checkPattern(res, regEx, path)
                    result = returnValue[0]

                    if result == -1: #File contents is corrupt skip this file
                        stop = True
                        return

                    if (result):
                        if currentScript == None:
                            currentScript = Script.Script(identifier, res)

                        self.addScriptToCollection(currentScript, detectionPattern, pattern, returnValue)

                        if pattern.determinative:
                            stop = True
                            return currentScript
        return currentScript

    #add script to the in memory collection
    def addScriptToCollection(self, currentScript, detectionPattern, pattern, returnValue):
        detectionTopic = detectionPattern.name + '_' + pattern.name

        if pattern.determinative:
            topic = detectionTopic
        else:
            topic = returnValue[1]

        currentScript.addDetectionPattern(detectionPattern.name, detectionTopic, topic, pattern.value, pattern.prerequisites)
