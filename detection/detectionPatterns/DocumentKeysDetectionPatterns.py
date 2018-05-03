class DocumentKeysDetectionPatterns:

    def __init__(self):
        self.patterns = []
        self.name = "DocumentKeys"
        phantom = (0.2, "PhantomJS", ["xmlEncoding",
                         "xmlVersion",
                         "xmlStandalone",
                         "selectedStylesheetSet",
                         "preferredStylesheetSet",
                         "webkitVisibilityState",
                         "webkitHidden",
                         "onbeforecopy",
                         "onbeforecut",
                         "onbeforepaste",
                         "onsearch",
                         "oncancel",
                         "oncuechange",
                         "onmousewheel",
                         "webkitIsFullScreen",
                         "webkitCurrentFullScreenElement",
                         "webkitFullscreenEnabled",
                         "webkitFullscreenElement",
                         "onwebkitfullscreenchange",
                         "onwebkitfullscreenerror",
                         "registerElement",
                         "caretRangeFromPoint",
                         "webkitCancelFullScreen",
                         "webkitExitFullscreen",
                         "releaseCapture", #added
                         "mozSetImageElement",
                         "mozCancelFullScreen",
                         "enableStyleSheetsForSet",
                         "caretPositionFromPoint",
                         "onbeforescriptexecute",
                         "onafterscriptexecute",
                         "mozFullScreen",
                         "mozFullScreenEnabled",
                         "mozFullScreenElement",
                         "selectedStyleSheetSet",
                         "lastStyleSheetSet",
                         "preferredStyleSheetSet",
                         "styleSheetSets",
                         "ondragexit",
                         "onloadend",
                         "onshow",
                         "onmozfullscreenchange",
                         "onmozfullscreenerror",
                         "onanimationcancel",
                         "onanimationend",
                         "onanimationiteration",
                         "onanimationstart",
                         "ontransitioncancel",
                         "ontransitionend",
                         "ontransitionrun",
                         "ontransitionstart",
                         "onwebkitanimationend",
                         "onwebkitanimationiteration",
                         "onwebkitanimationstart",
                         "onwebkittransitionend"])
        seleniumChrome  = (12.0, "SelChromeChromium", ["\$cdc","\$wdc","\$[a-z]dc_"])
        nightmare = (0.2, "Nightmare", ["onvisibilitychange"])
        seleniumIE = (12.0, "SelIE", [("__IE_DEVTOOLBAR_CONSOLE_EVAL_ERROR",'C'), ("__IE_DEVTOOLBAR_CONSOLE_EVAL_ERRORCODE",'C'),
        "__webdriver_script_fn"])

        misc = (12.0, "Misc.", ["_IDE([^a-zA-z]|_)", "callSelenium", "_Selenium_IDE_Recorder",
        "[\'|\"]nightmare[\'|\"]", "fxdriver_evaluate","driver_unwrapped", "webdriver_unwrapped",
        "driver_evaluate","fxdriver_unwrapped", "webdriver_evaluate",
        "webdriver-evaluate", "webdriver_script_function", "webdriver_script_func"])
        seleniumMisc = (12.0, "SeleniumMisc", ["'selenium'", '"selenium"', "\.selenium", "_selenium", "selenium_unwrapped", "selenium_evaluate"])

        self.patterns.extend((phantom, seleniumChrome, nightmare, seleniumIE, misc))