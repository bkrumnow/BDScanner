###############################################################################################################
## BotFingerprintingSurface.py
## Contains detection patterns based on web bot specific browser properties
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

from .. import DetectionPatternFactory
import re

class BotFingerprintingSurface:

    def __init__(self):
        self.patterns = []
        self.name = "BotFingerprintingSurface"

        openwpm_headful = DetectionPatternFactory.createDetectionPattern(110.0, "headful", [([
            "'webdriver'",
            '"webdriver"',
            "\.webdriver(?![a-zA-z-])"
        ], "OR")])

        instrumentation = DetectionPatternFactory.createDetectionPattern(100.0, "instrumentation", [
            "instrumentObject",
            "instrumentobject",
            "jsInstruments",
            "instrumentFingerprintingApis",
            "jsinstruments",
            "instrumentfingerprintingapis",])

        # currently not in use
        openwpm_headless = DetectionPatternFactory.createDetectionPattern(100.0, "headless", [
            "Inc.~llvmpipe",
            "VMware",])

        # currently not in use
        nightly = DetectionPatternFactory.createDetectionPattern(50.0, "nightly", [
            "Inc.~llvmpipe",
            "VMware",])

        self.patterns.extend((openwpm_headful, openwpm_headless, instrumentation, nightly))