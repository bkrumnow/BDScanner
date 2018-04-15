class WindowKeysDetectionPatterns:

    def __init__(self):
        self.patterns = []
        self.name = "WindowKeys"
        phantomGeneral = (0.2, "PhantomJSGeneral", [
#            "origin",
            "customElements",
            "external",
            "onanimationend",
            "onanimationiteration",
            "onanimationstart",
            "isSecureContext",
            "oncancel",
            "onclose",
            "oncuechange",
            "ontoggle",
            "onwheel",
            "onauxclick",
            "ongotpointercapture",
            "onlostpointercapture",
            "onpointerdown",
            "onpointermove",
            "onpointerup",
            "onpointercancel",
            "onpointerover",
            "onpointerout",
            "onpointerenter",
            "onpointerleave",
            "onlanguagechange",
            "onrejectionhandled",
            "onunhandledrejection",
            "requestIdleCallback",
            "cancelIdleCallback",
            "createImageBitmap",
            "caches",
            "ondevicemotion",
            "ondeviceorientation",
            "ondeviceorientationabsolute",
            "webkitStorageInfo",
            "fetch",
            "speechSynthesis",
            "webkitRequestFileSystem",
            "webkitResolveLocalFileSystemURL",        
            ("([\'\.\"\[])TEMPORARY",'C'),
            ("([\'\.\"\[])PERSISTENT",'C'),
            "offscreenBuffering", #added
#            "event",
            "webkitIndexedDB",
            "ontouchmove",
            "ontouchstart",
            "webkitNotifications",
            "ontouchend",
            "ontouchcancel",
            "showModalDialog",
            "webkitConvertPointFromNodeToPage",
            "webkitConvertPointFromPageToNode",
            "webkitCancelRequestAnimationFrame",
        ])
        phantomWebbot = (4.0, "PhantomJSWebbot", ["_phantom", "callPhantom",])
        nightmare = (4.0, "Nightmare", ["__nightmare"])
        misc = (1.4, "Misc", ["window.chrome", "window.attr", "onbeforeprint", "onafterprint", "onmessageerror",
        "onappinstalled", "onbeforeinstallprompt",
        "getMatchedCSSRules", #missing
#        ".console",
        ])
        seleniumIE = (3.0, "SelIE", [("__BROWSERTOOLS_CONSOLE_SAFEFUNC",'C'), ("__BROWSERTOOLS_CONSOLE_BREAKMODE_FUNC",'C'),
        ("__BROWSERTOOLS_CONSOLE",'C'),("__BROWSERTOOLS_EMULATIONTOOLS_ADDED",'C'),("__BROWSERTOOLS_DOMEXPLORER_ADDED",'C'),
        ("__BROWSERTOOLS_MEMORYANALYZER_ADDED","$0","$1","$2","$3","$4",'C'),("__BROWSERTOOLS_NETWORK_TOOL_ADDED",'C'),
        ("__BROWSERTOOLS_DEBUGGER",'C')])
        self.patterns.extend((phantomGeneral, phantomWebbot, nightmare, misc, seleniumIE))
