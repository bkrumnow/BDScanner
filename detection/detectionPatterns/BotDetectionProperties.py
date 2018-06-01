###############################################################################################################
## BotDetectionProperties.py
## Contains detection patterns based on web bot specific browser properties
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

from .. import DetectionPatternFactory

class BotDetectionProperties:

    def __init__(self):
        self.patterns = []
        self.name = "BotDetectionProperties"

        #Document
        document_seleniumChrome  = DetectionPatternFactory.createDetectionPattern(12.0, "SelChromeChromium", ["\$cdc","\$wdc","\$[a-z]dc_"], ['BrowserCharacteristics_document'])
        document_seleniumIE = DetectionPatternFactory.createDetectionPattern(12.0, "SelIE", [("__IE_DEVTOOLBAR_CONSOLE_EVAL_ERROR",'C'), ("__IE_DEVTOOLBAR_CONSOLE_EVAL_ERRORCODE",'C'),
                "__webdriver_script_fn"], ['BrowserCharacteristics_document'])
        document_misc = DetectionPatternFactory.createDetectionPattern(12.0, "Misc.", ["callSelenium", "_Selenium_IDE_Recorder",
        "fxdriver_evaluate","driver_unwrapped", "webdriver_unwrapped",
        "driver_evaluate","fxdriver_unwrapped", "webdriver_evaluate",
        "webdriver-evaluate", "webdriver_script_function", "webdriver_script_func"], ['BrowserCharacteristics_document'])

        #Navigator
        navigator_selenium = DetectionPatternFactory.createDetectionPattern(12.0, "Selenium", [(["'webdriver'", '"webdriver"', "\.webdriver(?![a-zA-z-])"], "OR")], ['BrowserCharacteristics_navigator'])

        #Window
        window_phantomWebbot = DetectionPatternFactory.createDetectionPattern(12.0, "PhantomJSWebbot", ["_phantom(?![a-zA-z-])", "callPhantom", "__phantomas(?![a-zA-z-])"], ['BrowserCharacteristics_window'])
        window_chromiumBasedAutomationDriver = DetectionPatternFactory.createDetectionPattern(12.0, "ChromiumWebbot", ["domAutomation", "domAutomationController"])
        window_nightmare = DetectionPatternFactory.createDetectionPattern(12.0, "Nightmare", ["__nightmare"], ['BrowserCharacteristics_window'])
        window_seleniumIE = DetectionPatternFactory.createDetectionPattern(4.0, "SelIE", [("__BROWSERTOOLS_CONSOLE_SAFEFUNC",'C'), ("__BROWSERTOOLS_CONSOLE_BREAKMODE_FUNC",'C'),
                ("__BROWSERTOOLS_CONSOLE",'C'),("__BROWSERTOOLS_EMULATIONTOOLS_ADDED",'C'),("__BROWSERTOOLS_DOMEXPLORER_ADDED",'C'),
                ('"__BROWSERTOOLS_MEMORYANALYZER_ADDED","$0","$1","$2","$3","$4"','C'),("__BROWSERTOOLS_NETWORK_TOOL_ADDED",'C'),
                ("__BROWSERTOOLS_DEBUGGER",'C')], ['BrowserCharacteristics_window'])

        self.patterns.extend((document_seleniumChrome, document_seleniumIE, document_misc, navigator_selenium, window_phantomWebbot,
        window_chromiumBasedAutomationDriver, window_nightmare, window_seleniumIE))