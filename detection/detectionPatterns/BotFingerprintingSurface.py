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

        #Document
        document_seleniumChrome  = DetectionPatternFactory.createDetectionPattern(12.0, "SelChromeChromium", ["\$cdc","\$wdc","\$[a-z]dc_"], ['BrowserFingerprints_document'])
        document_seleniumIE = DetectionPatternFactory.createDetectionPattern(12.0, "SelIE", [("__IE_DEVTOOLBAR_CONSOLE_EVAL_ERROR",'C'), ("__IE_DEVTOOLBAR_CONSOLE_EVAL_ERRORCODE",'C'),
                "__webdriver_script_fn"], ['BrowserFingerprints_document'])
        document_misc = DetectionPatternFactory.createDetectionPattern(12.0, "Misc.", ["callSelenium", "_Selenium_IDE_Recorder",
        "fxdriver_evaluate","driver_unwrapped", "webdriver_unwrapped",
        "driver_evaluate","fxdriver_unwrapped", "webdriver_evaluate",
        "webdriver-evaluate", "webdriver_script_function", "webdriver_script_func", "_selenium", "selenium_unwrapped", "selenium_evaluate"], ['BrowserFingerprints_document'])

        #Navigator
        navigator_selenium = DetectionPatternFactory.createDetectionPattern(12.0, "Selenium", [(["'webdriver'", '"webdriver"', "\.webdriver(?![a-zA-z-])"], "OR")], ['BrowserFingerprints_navigator'])

        #Window
        window_phantomWebbot = DetectionPatternFactory.createDetectionPattern(12.0, "PhantomJSWebbot", ["_phantom(?![a-zA-z-])", "callPhantom", "__phantomas(?![a-zA-z-])"], ['BrowserFingerprints_window'])
        window_chromiumBasedAutomationDriver = DetectionPatternFactory.createDetectionPattern(12.0, "ChromiumWebbot", ["domAutomation", "domAutomationController"])
        window_nightmare = DetectionPatternFactory.createDetectionPattern(12.0, "Nightmare", ["__nightmare"], ['BrowserFingerprints_window'])
        window_seleniumIE = DetectionPatternFactory.createDetectionPattern(4.0, "SelIE", [("__BROWSERTOOLS_CONSOLE_SAFEFUNC",'C'), ("__BROWSERTOOLS_CONSOLE_BREAKMODE_FUNC",'C'),
                ("__BROWSERTOOLS_CONSOLE",'C'),("__BROWSERTOOLS_EMULATIONTOOLS_ADDED",'C'),("__BROWSERTOOLS_DOMEXPLORER_ADDED",'C'),
                ('"__BROWSERTOOLS_MEMORYANALYZER_ADDED","$0","$1","$2","$3","$4"','C'),("__BROWSERTOOLS_NETWORK_TOOL_ADDED",'C'),
                ("__BROWSERTOOLS_DEBUGGER",'C')], ['BrowserFingerprints_window'])


        #prerequiste navigator.useragent
        userAgent = DetectionPatternFactory.createDetectionPattern(12.0, "UserAgent", ["PhantomJS(?![a-zA-z-])", "HeadlessChrome", "[\'|\"]slimer[\'|\"]", "Sequentum", ["PhantomJS(?![a-zA-z-])", "botPattern"]], ['BrowserFingerprints_UserAgent'])
        userAgentElectron = DetectionPatternFactory.createDetectionPattern(12.0,  "UserAgentElectron", [(["'electron'", '"electron"', "\.electron(?![a-zA-z-])"], "OR")], ['BrowserFingerprints_UserAgent'])
        userAgentWOW = DetectionPatternFactory.createDetectionPattern(8.0, "UserAgentWOW", [["WOW64", "WOW32"]], ['BrowserFingerprints_UserAgent'])
        blackList = DetectionPatternFactory.createDetectionPattern(12.0, "BlackList", [re.escape('Mozilla/4.0 (Windows NT 6.2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.70 Safari/537.17')], ['BrowserFingerprints_UserAgent']) #VAMSOFT

        openWPM = DetectionPatternFactory.createDetectionPattern(600.0, "openWPM", ["instrumentObject"
                                                                                    , "jsInstruments"
                                                                                    , "instrumentFingerprintingApis"
                                                                                    , "instrumentobject"
                                                                                    , "jsinstruments"
                                                                                    , "instrumentfingerprintingapis"
                                                                                    ])

	# currently not in use
	openWPM_headless = DetectionPatternFactory.createDetectionPattern(1000.0, "openWPM_headless", ["Inc.~llvmpipe"
                                                                                                    , "VMware"])

        self.patterns.extend((document_seleniumChrome, document_seleniumIE, document_misc, navigator_selenium, window_phantomWebbot,
        window_chromiumBasedAutomationDriver, window_nightmare, window_seleniumIE,
        userAgent, userAgentElectron, userAgentWOW, blackList, openWPM))
