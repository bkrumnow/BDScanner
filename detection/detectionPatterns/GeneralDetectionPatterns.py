import re

class GeneralDetectionPatterns:

  def __init__(self):
    self.patterns = []
    self.name = "General"
    userAgent = (12.0, "UserAgent", [
        "PhantomJS(?![a-zA-z-])",
        "HeadlessChrome",
        "domAutomation",
        "slimer", "Sequentum"]) #not documented
    userAgentElectron = (12.0,  "UserAgentElectron", ["'electron'", '"electron"', "\.electron"])
    userAgentWOW = (8.0, "UserAgentWOW", [["WOW64", "WOW32"]])
    colorDepth = (0.1, "ColorDepth", ["colorDepth == 32", "screen.colorDepth", "window.screen.colorDepth"])
    hardWareConcurrency = (0.1, "HardwareConcurrency", ["navigator.hardwareConcurrency", "hardwareConcurrency == -1"])
    canvas = (1.2, "Canvas", ["createElement('canvas')", "canvas.getContext", "canvas.toDataURL", re.escape('"canvas").getContext("2d")')])
    webgl = (0.6, "WebGL", ["getContext\('webgl'\)", "getContext\('experimental-webgl'\)",
    "getSupportedExtensions", "createBuffer", "bindBuffer", "createProgram", "createShader",
    "getExtension('WEBGL_debug_renderer_info')", re.escape('("experimental-webgl") : "WebGLRenderingContext"')])
    liedLanguages = (1, "LiedLanguages", ["navigator.language", re.escape("navigator.languages["), "navigator.language.substr"])
    touchSupport = (0.1, "TouchSupport", ["navigator.maxTouchPoints", "maxTouchPoints", "createEvent('TouchEvent')"])
    fonts = (0.1, "Fonts", ["style.fontFamily", "style.fontSize", ".offsetHeight", ".offsetWidth"])
    flashSupport = (0.6, "FlashSupport", ["___fp_swf_loaded", "swfobject.embedSWF", "allowScriptAccess"]) #not documented
    plugins = (1.4, "Plugins", ["navigator.plugins.length",
    "window.ActiveXObject",  "plugins == 0", "plugins === 0",
    "plugins.length == 0", "plugins.length === 0", "plugins.length == 'undefined'", "plugins.length === 'undefined'","x-pnacl", "Shockwave Flash", "ShockwaveFlash.ShockwaveFlash"])
    stackTrace = (0.2, "StackTrace", [".stack"])
    webSecurity = (0.1, "WebSecurity", [])
    popupSuppression = (1, "PopupSuppression", [["Date.now", "alert"]])
    mimeTypes = (1.4, "MimeTypes", ["mimeTypes"])
    languages = (1.6, "Languages", ["!navigator.languages", "navigator.languages.length", "navigator.languages === 'undefined'"])
    images = (0.1, "Images", ["Brain Paul", "Mesa OffScreen", "image.width === 0", "image.width == 0", "image.height === 0","image.height == 0"])
    misc = (0.1, "Misc", ["Function.prototype.bind", "Function.prototype.toString", "window.Buffer", "window.emit", "window.spawn",
    "outerWidth === 0", "outerWidth == 0", "outerHeight === 0","outerHeight == 0", "Modernizr['hairline']"])
    distilMisc = (12, "DistilMisc", [re.escape('distil.areyouahuman')])
    blackList = (2.0, "BlackList", ['Mozilla/4.0 (Windows NT 6.2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.70 Safari/537.17']) #VAMSOFT

    self.patterns.extend((userAgent,
    userAgentElectron,
    userAgentWOW,
    colorDepth,
    hardWareConcurrency,
    canvas,webgl,
    liedLanguages,
    touchSupport,
    fonts,
    flashSupport,plugins,
#    stackTrace,
    webSecurity,
    popupSuppression,
    mimeTypes,
    languages,
    images,
    misc,
    distilMisc,
    blackList))