import re

class BotDetectionPattern:

  def __init__(self):
        self.WebBot = [
#            "\$cdc",
#            "\$wdc",
#            "\$[a-z]dc",
#            "webdriver_evaluate",
#            "webdriver-evaluate",
#            "selenium_evaluate",
#            "webdriver_script_function",
#            "webdriver_script_func",
            #"webdriver_script_fn",
#            "fxdriver_evaluate",
#            "driver_unwrapped",
#            "webdriver_unwrapped",
#            "driver_evaluate",
#            "selenium_unwrapped",
#            "fxdriver_unwrapped",
            #"_phantom",
           # "__nightmare",
#            "nightmare",
#            "_selenium",
          #  "callPhantom",
#            "callSelenium",
#            "_Selenium_IDE_Recorder",
#            "selenium",
            #"webdriver",
#            "_IDE([^a-zA-z]|_)",
            #"_Recorder",
     #       "Sequentum",
#            "Phantom",
#            "PhantomJS",
#            "domAutomation",
#            "HeadlessChrome",
#            "slimer",
   #         "accept-language",
#            "electron(?![a-zA-z])",
#            "x-pnacl",
#            "WOW64",
#            "WOW32",
#            "ua-cpu"
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
            ('Distill_CDN', ['|| window._phantom || window.__phantomas || window.callPhantom || 0 == navigator.onLine &&', 'n-distil.areyouahuman.com']),
            ('ParameterX', ['return !!window._Selenium_IDE_Recorder', '"PX239", function\(\)']),
            ('AsyncDistil', ['\$cdc_asdjflasutopfhvcZLmcfl_", "0", "{"sensor_data":"", "touchmove", "doadma_en", "readyState", ', '_ac = \[', '"Chrome Remote Desktop Viewer", "fonts", "callPhantom", "RTCPeerConnection", "attachEvent", "timezoneOffsetKey", "lang"']),
            ('Google_ima3', ['document.addEventListener\("webdriver-evaluate"', 'return "_phantom" in', 'return "callPhantom" in', 'window.google_async_iframe_id']),
            ('ShieldSquare', ['typeof a.__webdriver_script_fn ', '","j34":"', '"undefined" !== typeof a._Selenium_IDE_Recorder']),
            ('Bowser', ['} : /phantom/i.test\(e\) ?', 'name: "SlimerJS"', 'Bowser']),
            ('liveintent', ['name: "phantomjs",', '"./internal/default_filter"', '"./processors/stack": 10', 'o = r.appId || "mint-production-appId"']),
            ('webfont_googleAPI', ['a.a.indexOf\("PhantomJS"\)', 'e = "PhantomJS"', 'a.a.indexOf\("PlayStation"\)', 'a.a.indexOf\("AdobeAIR"\)', 'Web Font Loader']),
            ('fox_browser', ['function getWindowsVersion\(s\)','/phantom/i.test\(ua\)', '/slimerjs/i.test\(ua\)', 'function detect\(ua\)']),
            ('akamaicdc', ['in document || navigator.webdriver', '\$cdc_asdjflasutopfhvcZLmcfl_', '"callPhantom" in e || /PhantomJS/i.test']),
            ('unknown_obf', [re.escape('var _ = ["opera", "Candara", "", "btoa", "HTMLMenuItemElement", "Vani", "timing", "Malgun Gothic", "navigator", "Calibri", "Opera", "screenX", "Shonar Bangla", "bt", "charCodeAt", "save", "[object SafariRemoteNotification]", "charAt", "1.0", "<div>", "textBaseline", "XMLHttpRequest", "7", "MS PGothic", "Noteworthy", "5.0", "getElementsByClassName", "src", "port", "compute", "Apple SD Gothic Neo", "hostname", "screenY", "Lucida Sans", "product", "AVENIR", "Synchro LET", "getImageData", "Vijaya", "Yu Gothic UI", "outerWidth", "1.4", "Skia", "ieps", "indexedDB", "AcroPDF.PDF.1", "ShockwaveFlash.ShockwaveFlash.7", ".", "number", "toHexStr", "bazadebezolkohpepadr", "Chrome IOS", "/akam/10/pixel_", "object", "exitEarly", "Big Caslon", "18pt Tahoma", "insertBefore", "location", "boolean", "chrome", "}", "Gill Sans", "documentElement", "encodeURIComponent", "screen", "description", "ap", "Safari", "profile", "oscpu", "childNodes", "drawImage", "open", "</div>", "documentMode", "name", "Microsoft.XMLHTTP", "text", "IE", "Monaco", "=", "fonts", "detachEvent", "Mona Lisa Solid ITC TT", "driver", "doNotTrack", "sr", "sessionStorage", "Abadi MT Condensed Light", "2.0", "pageXOffset", "ROTL", "1.9", "now", "ceil", "globalStorage", "urhehlevkedkilrobacf",')]),
            ('CloudFlare', ['window.callPhantom || window._phantom', 'var ambn_cd = document.createElement\("script"\);']),
            ('DoubleClick', [re.escape('b.callPhantom || b._phantom || b.__phantomas || b.Buffer || b.emit || b.spawn || b.webdriver || b.domAutomation')]),
            ('Segmentify_BrowserFP', [re.escape('var r, i = n(/(ipod|iphone|ipad)/i).toLowerCase(),'), re.escape('version: n(/slimerjs\/(\d+(\.\d+)?)/i)')]),
            ('AkamaiBlockBotsUA', [re.escape('/Mozilla\/5\.0\s\(Windows\sNT\s6\.1;\sWOW64;\sTrident\/7\.0;\sSLCC2;\s\.NET\sCLR\s2\.0\.50727;\s\.NET\sCLR\s3\.5\.30729;\s\.NET\sCLR\s3\.0\.30729;\s\.NET4\.0C;\s\.NET4\.0E;\srv:11\.0\)\slike\sGecko/i) || navigator.userAgent.match(/Mozilla\/5\.0\s\(Windows\sNT\s6\.1;\sWOW64;\srv:45\.0\)\sGecko\/20100101\sFirefox\/45\.0/i) || navigator.userAgent.match(/PTST/i)')]),
            ('AkamaiBlockBotsUA2', [re.escape('\sWOW64;'), 'Block bot agents', 'AKM-41'])
        ]
        self.Captcha = []
        self.Navigator = [
            #"navigator.plugins.length",
#            "navigator.onLine",
            #"navigator.languages"
        ]
        self.Browser = [
#            "Modernizr['hairline']"
        ]
        self.Graphics = [
#            "Brain Paul",
#            "Mesa OffScreen",
#            "image.width === 0",
#            "image.width == 0",
#            "image.height === 0",
#            "image.height == 0",
            #"getContext\('webgl'\)",
#            "getContext\('experimental-webgl'\)",
            #"createElement\('canvas'\)"
        ]
        self.JSEngine = [
#            "Function.prototype.bind",
#            "Function.prototype.toString",
#            "window.Buffer",
#            "window.emit",
#            "window.spawn",
#            "outerWidth === 0",
#            "outerWidth == 0",
#            "outerHeight === 0",
#            "outerHeight == 0",
            #"window.chrome", #selenium missing
#            "plugins == 0",
#            "plugins === 0",
         #   "q=0.9", #nigthmare missing,
            #"getMatchedCSSRules", #nightmare added window
        ]

        self.BlackListUA = [
#            'Mozilla/4.0 (Windows NT 6.2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.70 Safari/537.17', #VAMSOFT
        ]

