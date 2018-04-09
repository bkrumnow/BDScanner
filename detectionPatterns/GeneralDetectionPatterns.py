class GeneralDetectionPatterns:

  def __init__(self):
    self.patterns = []
    self.name = "General"
    userAgent = (1, "UserAgent", [
        "PhantomJS",
        "HeadlessChrome",
        "electron(?![a-zA-z])",
        "WOW64",
        "WOW32",
        "domAutomation",
        "slimer", "Sequentum"]) #not documented
    colorDepth = (0.1, "ColorDepth", ["colorDepth", "screen.colorDepth", "window.screen.colorDepth"]);
    hardWareConcurrency = (0.1, "HardwareConcurrency", ["navigator.hardwareConcurrency", "hardwareConcurrency"])
    canvas = (1.2, "Canvas", ["createElement('canvas')", "canvas.getContext", "canvas.toDataURL"])
    webgl = (0.6, "WebGL", ["getContext\('webgl'\)", "getContext\('experimental-webgl'\)",
    "getSupportedExtensions", "createBuffer", "bindBuffer", "createProgram", "createShader",
    "getExtension('WEBGL_debug_renderer_info')"])
    liedLanguages = (1, "LiedLanguages", ["navigator.language"])
    touchSupport = (0.1, "TouchSupport", ["navigator.maxTouchPoints", "maxTouchPoints", "createEvent('TouchEvent')"])
    fonts = (0.1, "Fonts", ["style.fontFamily", "style.fontSize", "offsetHeight", "offsetWidth"])
    flashSupport = (0.6, "FlashSupport", ["___fp_swf_loaded", "swfobject.embedSWF", "allowScriptAccess"]) #not documented
    plugins = (1.4, "Plugins", ["navigator.plugins", "navigator.plugins.length",
    "window.ActiveXObject",  "plugins == 0", "plugins === 0",
    "plugins.length == 0", "plugins.length === 0", "x-pnacl"])
    stackTrace = (0.2, "StackTrace", [".stack"])
    webSecurity = (0.1, "WebSecurity", [])
    popupSuppression = (1, "PopupSuppression", ["Date.now", "alert"])
    mimeTypes = (1.4, "MimeTypes", ["mimeTypes"])
    languages = (1.6, "Languages", ["navigator.languages"])
    images = (0.1, "Images", ["Brain Paul", "Mesa OffScreen", "image.width === 0", "image.width == 0", "image.height === 0","image.height == 0"])
    misc = (0.1, "Misc", ["Function.prototype.bind", "Function.prototype.toString", "window.Buffer", "window.emit", "window.spawn",
    "outerWidth === 0", "outerWidth == 0", "outerHeight === 0","outerHeight == 0", "Modernizr['hairline']"])
    blackList = (2.0, "BlackList", ['Mozilla/4.0 (Windows NT 6.2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.70 Safari/537.17']) #VAMSOFT
    self.patterns.extend((userAgent, colorDepth,hardWareConcurrency,canvas,webgl,liedLanguages,touchSupport,fonts,flashSupport,plugins,
    stackTrace,webSecurity,popupSuppression,mimeTypes,languages,images,misc,blackList))