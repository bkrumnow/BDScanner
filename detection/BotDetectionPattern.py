class BotDetectionPattern:

  def __init__(self):
        self.WebBot = [
            "$cdc",
            "$wdc",
            "$[a-z]dc",
            "webdriver_evaluate",
            "webdriver-evaluate",
            "selenium_evaluate",
            "webdriver_script_function",
            "webdriver_script_func",
            "webdriver_script_fn",
            "fxdriver_evaluate",
            "driver_unwrapped",
            "webdriver_unwrapped",
            "driver_evaluate",
            "selenium_unwrapped",
            "fxdriver_unwrapped",
            "_phantom",
            "__nightmare",
            "nightmare",
            "_selenium",
            "callPhantom",
            "callSelenium",
            "_Selenium_IDE_Recorder",
            "selenium",
            "webdriver",
            "_IDE([^a-zA-z]|_)",
            "_Recorder",
            "Sequentum",
            "Phantom",
            "PhantomJS",
            "domAutomation",
            "HeadlessChrome",
            "slimer",
            "accept-language",
            "electron(?![a-zA-z])",
            "x-pnacl~",
            "WOW64",
            "WOW32",
            "ua-cpu"
        ]
        self.Companies = [
            "whiteops",
            "distil",
            "incapsula",
            "akamai",
            "cloudflare",
            "spider.io",
            "shape-security",
            "vam-soft",
            "whitehat",
            "alienVault",
            "perimeterx"
        ]
        self.CompanyPattern = [
            ('Distil', ['Internet Explorer", "Firefox", "Chrome", "Chromium", "Safari", "MacIntel", "Win32", "Win64", "Windows", "WinNT", "OSX", "Linux", "eval", "O", "Snow Leopard", "Lion/Mountain Lion", "Yosemite", "Mavericks", "d", "XMLHttpRequest", "undefined", "Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP", "length", "substring", "slice", "n", "substr", "", "navigator", "toLowerCase", "a", "h", "replace", "t", "\$2\$1", "platform", "script", "object", "screen", "fonts", "cpu", "addEventListener", "__", "_", "uate", "__web", "__s", "__fx", "_unwrapped", "_script_", "tion", "_fn", "_S", "_IDE", "_Recorder", "_p", "_s", "P", "S", "e", "document", "match", "cache_", "300", "external", "Sequentum", "indexOf", "400", "s", "getAttribute", "documentElement", "500", "web", "600", "700", "POST", "open", "=", "send", "hostname", "location", "___dTL", "getElementById", "nodeName", "INPUT", "value", "audio", "progress", "video", "window", "media", "readystate", "loading", "load", "-", "attachEvent", "onload"']),
            ('ParameterX', ['return !!window._Selenium_IDE_Recorder', '"PX239", function\(\)']),
            ('AsyncDistil', ['\$cdc_asdjflasutopfhvcZLmcfl_", "0", "{"sensor_data":"", "touchmove", "doadma_en", "readyState", ', '_ac = \[', '"Chrome Remote Desktop Viewer", "fonts", "callPhantom", "RTCPeerConnection", "attachEvent", "timezoneOffsetKey", "lang"']),
            ('Google_ima3', ['document.addEventListener\("webdriver-evaluate"', 'return "_phantom" in', 'return "callPhantom" in', 'window.google_async_iframe_id']),
            ('Bowser', ['} : /phantom/i.test\(e\) ?', 'name: "SlimerJS"', 'Bowser'])
        ]
        self.Captcha = []
        self.Navigator = [
            "navigator.plugins.length",
            "navigator.onLine",
            "navigator.languages"
        ]
        self.Browser = [
            "Modernizr['hairline']"
        ]
        self.Graphics = [
            "Brain Paul",
            "Mesa OffScreen",
            "image.width === 0",
            "image.width == 0",
            "image.height === 0",
            "image.height == 0"
        ]
        self.JSEngine = [
            "Function.prototype.bind",
            "Function.prototype.toString",
            "window.Buffer",
            "window.emit",
            "window.spawn",
            "outerWidth === 0",
            "outerWidth == 0",
            "outerHeight === 0",
            "outerHeight == 0"
        ]

