class NavigatorDetectionPatterns:

    def __init__(self):
        self.patterns = []
        phantom = (1.4, ["maxTouchPoints",
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
        selenium = (1.4, ["webdriver"])
        general = (1.4, ["navigator.appVersion", "navigator.userAgent", "navigator.vendor",
        "navigator.onLine"]) #not documented
        self.patterns.extend((phantom, selenium, general))