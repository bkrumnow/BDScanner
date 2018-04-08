class GeneralDetectionPatterns:

  def __init__(self):
    self.patterns = []
    userAgent = (1, [
        "PhantomJS",
        "HeadlessChrome",
        "electron(?![a-zA-z])",
        "WOW64",
        "WOW32",
        "domAutomation",
        "slimer", "Sequentum"]) #not documented
    colorDepth = (0.1, ["colorDepth", "screen.colorDepth", "window.screen.colorDepth"]);
    hardWareConcurrency = (0.1, ["navigator.hardwareConcurrency", "hardwareConcurrency"])
    canvas = (1.2, ["createElement('canvas')", "canvas.getContext", "canvas.toDataURL"])
    webgl = (0.6, ["getContext\('webgl'\)", "getContext\('experimental-webgl'\)",
    "getSupportedExtensions", "createBuffer", "bindBuffer", "createProgram", "createShader",
    "getExtension('WEBGL_debug_renderer_info')"])
    liedLanguages = (1, ["navigator.language"])
    touchSupport = (0.1, ["navigator.maxTouchPoints", "maxTouchPoints", "createEvent('TouchEvent')"])
    fonts = (0.1, ["style.fontFamily", "style.fontSize", "offsetHeight", "offsetWidth"])
    flashSupport = (0.6, ["___fp_swf_loaded", "swfobject.embedSWF", "allowScriptAccess"]) #not documented
    plugins = (1.4, ["navigator.plugins", "navigator.plugins.length",
    "window.ActiveXObject",  "plugins == 0", "plugins === 0",
    "plugins.length == 0", "plugins.length === 0", "x-pnacl"])
    stackTrace = (0.2, [".stack"])
    webSecurity = (0.1, [])
    popupSuppression = (1, ["Date.now", "alert"])
    mimeTypes = (1.4, ["mimeTypes"])
    languages = (1.6, ["navigator.languages"])
    images = (0.1, ["Brain Paul", "Mesa OffScreen", "image.width === 0", "image.width == 0", "image.height === 0","image.height == 0"])
    misc = (0.1, ["Function.prototype.bind", "Function.prototype.toString", "window.Buffer", "window.emit", "window.spawn",
    "outerWidth === 0", "outerWidth == 0", "outerHeight === 0","outerHeight == 0", "Modernizr['hairline']"])
    blackList = (2.0, ['Mozilla/4.0 (Windows NT 6.2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.70 Safari/537.17']) #VAMSOFT
    self.patterns.extend((userAgent, colorDepth,hardWareConcurrency,canvas,webgl,liedLanguages,touchSupport,fonts,flashSupport,plugins,
    stackTrace,webSecurity,popupSuppression,mimeTypes,languages,images,misc,blackList))