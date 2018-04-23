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
        selenium = (12.0, "Selenium", ["webdriver(?![a-zA-z-])"])
        userAgent = (0.2, 'UserAgent', ["navigator.userAgent", ['navigator', 'useragent']])
        misc = (0.2, "Misc.", ["navigator.appVersion", "navigator.vendor",
        "navigator.onLine"]) #not documented

        self.patterns.extend((phantom, selenium, userAgent, misc))