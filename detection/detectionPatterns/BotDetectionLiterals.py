from .. import DetectionPatternFactory
import re

class BotDetectionLiterals:

    def __init__(self):
        self.patterns = []
        self.name = "BotDetectionLiterals"

        nightmare = DetectionPatternFactory.createDetectionPattern(8.0, "Nightmare", ["[\'|\"]nightmare[\'|\"]"])
        seleniumMisc = DetectionPatternFactory.createDetectionPattern(12.0, "SeleniumMisc", ["'selenium'", '"selenium"', "\.selenium", "_selenium", "selenium_unwrapped", "selenium_evaluate"])
        distil = DetectionPatternFactory.createDetectionPattern(24, "Distil", [re.escape('distil.areyouahuman')])
        botPattern = DetectionPatternFactory.createDetectionPattern(24.0, "BotPattern", [["BotPattern", "PhantomJS"]])
        misc = DetectionPatternFactory.createDetectionPattern(4.0, "Misc.", ["xhrHasBeenTamperedWith", "isHeadless", "botDetect", "detectPhantomJs", "detectSelenium", "isPhantomJS", "isHeadlessChrome", "botPattern", "honeypot"])

        self.patterns.extend((nightmare, seleniumMisc, distil, botPattern, misc))