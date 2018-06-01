###############################################################################################################
## BrowserCharacteristics.py
## Contains detection patterns based on web bot specific browser properties (Characteristics)
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

from .. import DetectionPatternFactory
import re

class BrowserCharacteristics:

    def __init__(self):
        self.patterns = []
        self.name = "BrowserCharacteristics"

        colorDepth = DetectionPatternFactory.createDetectionPattern(0.1, "ColorDepth", ["colorDepth == 32", "screen.colorDepth", "window.screen.colorDepth"])
        hardWareConcurrency = DetectionPatternFactory.createDetectionPattern(0.1, "HardwareConcurrency", ["navigator.hardwareConcurrency", "hardwareConcurrency == -1"])
        canvas = DetectionPatternFactory.createDetectionPattern(1.2, "Canvas", ["createElement('canvas')", "canvas.getContext", "canvas.toDataURL", re.escape('"canvas").getContext("2d")')])
        webgl = DetectionPatternFactory.createDetectionPattern(1.2, "WebGL", ["getContext\('webgl'\)", "getContext\('experimental-webgl'\)",
        "getSupportedExtensions", "createBuffer", "bindBuffer", "createProgram", "createShader",
        "getExtension('WEBGL_debug_renderer_info')", re.escape('("experimental-webgl") : "WebGLRenderingContext"')])
        liedLanguages = DetectionPatternFactory.createDetectionPattern(1.0, "LiedLanguages", ["navigator.language", re.escape("navigator.languages["), "navigator.language.substr"])
        touchSupport = DetectionPatternFactory.createDetectionPattern(0.1, "TouchSupport", ["navigator.maxTouchPoints", "maxTouchPoints", "createEvent('TouchEvent')"])
        fonts = DetectionPatternFactory.createDetectionPattern(0.1, "Fonts", ["style.fontFamily", "style.fontSize", ".offsetHeight", ".offsetWidth"])
        flashSupport = DetectionPatternFactory.createDetectionPattern(1.0, "FlashSupport", ["___fp_swf_loaded", "swfobject.embedSWF", "allowScriptAccess"]) #not documented
        plugins = DetectionPatternFactory.createDetectionPattern(1.5, "Plugins", ["plugins.length",
        "window.ActiveXObject", ([["plugins.length == 0"],["plugins.length === 0"], ["plugins == undefined"], ["plugins === undefined"]], 'OR'), "x-pnacl", "Shockwave Flash", "ShockwaveFlash.ShockwaveFlash"], ['BrowserCharacteristics_navigator'])
        stackTrace = DetectionPatternFactory.createDetectionPattern(0.2, "StackTrace", [".stack"])
        webSecurity = DetectionPatternFactory.createDetectionPattern(0.1, "WebSecurity", [])
        popupSuppression = DetectionPatternFactory.createDetectionPattern(0.5, "PopupSuppression", [["Date.now", "alert"]])
        mimeTypes = DetectionPatternFactory.createDetectionPattern(1.0, "MimeTypes", ["mimeTypes.length"])
        languages = DetectionPatternFactory.createDetectionPattern(1.5, "Languages", ["!navigator.languages", "navigator.languages.length", "navigator.languages === 'undefined'"])
        images = DetectionPatternFactory.createDetectionPattern(0.1, "Images", ["Brain Paul", "Mesa OffScreen", "image.width === 0", "image.width == 0", "image.height === 0","image.height == 0"])
        misc = DetectionPatternFactory.createDetectionPattern(0.1, "Misc", ["Function.prototype.bind", "Function.prototype.toString", "window.Buffer", "window.emit", "window.spawn",
        "outerWidth === 0", "outerWidth == 0", "outerHeight === 0","outerHeight == 0", "Modernizr['hairline']",
        "navigator.appVersion", "navigator.vendor","navigator.onLine"])

        userAgent = DetectionPatternFactory.createDetectionPattern(1.0, 'UserAgent', [([["navigator.userAgent"], ['navigator', 'useragent']], 'OR')])
        window = DetectionPatternFactory.createDetectionPattern(0.1, 'window', [r'\bwindow\b'])
        navigator = DetectionPatternFactory.createDetectionPattern(0.1, 'navigator', [r'\bnavigator\b'])
        document = DetectionPatternFactory.createDetectionPattern(0.1, 'document', [r'\bdocument\b'])

        self.patterns.extend((
        colorDepth,
        hardWareConcurrency,
        canvas,webgl,
        liedLanguages,
        touchSupport,
        fonts,
        flashSupport,plugins,
    #    stackTrace,
#        webSecurity,
        popupSuppression,
        mimeTypes,
        languages,
        images,
        misc,
        userAgent,
        window,
        navigator,
        document))
