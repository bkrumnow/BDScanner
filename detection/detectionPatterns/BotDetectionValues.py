from .. import DetectionPatternFactory
import re

class BotDetectionValues:

    def __init__(self):
        self.patterns = []
        self.name = "BotDetectionValues"

        #prerequiste navigator.useragent
        userAgent = DetectionPatternFactory.createDetectionPattern(12.0, "UserAgent", ["PhantomJS(?![a-zA-z-])", "HeadlessChrome", "[\'|\"]slimer[\'|\"]", "Sequentum"], ['BrowserCharacteristics_UserAgent'])
        userAgentElectron = DetectionPatternFactory.createDetectionPattern(12.0,  "UserAgentElectron", [(["'electron'", '"electron"', "\.electron(?![a-zA-z-])"], "OR")], ['BrowserCharacteristics_UserAgent'])
        userAgentWOW = DetectionPatternFactory.createDetectionPattern(8.0, "UserAgentWOW", [["WOW64", "WOW32"]], ['BrowserCharacteristics_UserAgent'])
        blackList = DetectionPatternFactory.createDetectionPattern(12.0, "BlackList", [re.escape('Mozilla/4.0 (Windows NT 6.2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.70 Safari/537.17')], ['BrowserCharacteristics_UserAgent']) #VAMSOFT

        self.patterns.extend((userAgent, userAgentElectron, userAgentWOW, blackList))