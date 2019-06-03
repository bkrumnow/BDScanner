###############################################################################################################
## DetectorPatterns.py
## Contains detection patterns based on found web bot detection script inclusions
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

from .. import DetectionPatternFactory
import re

class DetectorPatterns:
    def __init__(self):
        self.patterns = []
        self.name = "DetectorPatterns"

        score = 500.0
        distilDetection1 = DetectionPatternFactory.createDetectionPattern(score, 'DistilDetection1', ['\x49\x6E\x74\x65\x72\x6E\x65\x74\x20\x45\x78\x70\x6C\x6F\x72\x65\x72","\x46\x69\x72\x65\x66\x6F\x78'], None, True)
        distilDetection2 = DetectionPatternFactory.createDetectionPattern(score, 'DistilDetection1', ['"\x41\x64\x6f\x62\x65\x41\x41\x4d\x44\x65\x74\x65\x63\x74","\x53\x68\x61\x72\x65\x50\x6f\x69\x6e\x74\x20\x42\x72\x6f\x77\x73\x65\x72\x20\x50\x6c\x75\x67\x2d\x69\x6e","\x63\x6b\x69\x65","\x52\x65\x61\x6c\x50\x6c\x61\x79\x65\x72\x20\x56\x65\x72\x73\x69\x6f\x6e\x20\x50\x6c\x75\x67\x69\x6e"'], None, True)
        distil_CDN1 = DetectionPatternFactory.createDetectionPattern(score, 'Distil_CDN1', [[re.escape('|| window._phantom || window.__phantomas || window.callPhantom || 0 == navigator.onLine &&'), 'n-distil.areyouahuman.com']], None, True)
        distil_CDN2 = DetectionPatternFactory.createDetectionPattern(score, 'Distil_CDN2', [[re.escape('||window._phantom||window.__phantomas||window.callPhantom||0==navigator.onLine&&'), 'n-distil.areyouahuman.com']], None, True)
        perimeterX = DetectionPatternFactory.createDetectionPattern(score, 'PerimeterX', [['perimeterx', 'window._Selenium_IDE_Recorder', 'PX239', 'callPhantom']], None, True)
        datadome = DetectionPatternFactory.createDetectionPattern(score, 'DataDome', [['checkSelenium', 'checkNightmare', 'DataDomeAnalyzer']], None, True)
        adScore = DetectionPatternFactory.createDetectionPattern(score, 'AdScore', [['AdscoreInit', 'webdriver', re.escape('window.adscore_jsv=')]], None, True)
        perfDrive = DetectionPatternFactory.createDetectionPattern(score, 'Perfdrive', [['perfdrive.com', '_Selenium_IDE_Recorder', '.seleniumKey', re.escape('getAttribute("webdriver")')]], None, True)

        self.patterns.extend((distilDetection1, distilDetection2, distil_CDN1, distil_CDN2, perimeterX, datadome, adScore, perfDrive))
