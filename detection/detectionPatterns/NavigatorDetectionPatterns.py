class NavigatorDetectionPatterns:

    def __init__(self):
        self.patterns = []
        self.name = "NavigatorAttr"
        phantom = (0.2, "PhantomJS", ["maxTouchPoints",
                         "hardwareConcurrency",
                         "doNotTrack",
                         "geolocation",
                         "mediaDevices",
                         "connection",
                         "webkitTemporaryStorage",
                         "webkitPersistentStorage",
                         "serviceWorker",
                         "budget",
                         "permissions",
                         "presentation",
                         "navigator.vendor"])
        selenium = (4.0, "Selenium", ["webdriver"])
        misc = (0.2, "Misc.", ["navigator.appVersion", "navigator.userAgent", "navigator.vendor",
        "navigator.onLine"]) #not documented
        self.patterns.extend((phantom, selenium, misc))