class FileCache:
    def __init__(self):
        self.files = {}

    def addToCache(self, script):
        scriptHash = hash(script)

        if scriptHash not in self.files:
            self.files[scriptHash] = script.identifier
        else:
            script.fromCache = self.files[scriptHash]

    def getCachedObject(self, script):
        scriptHash = hash(script)

        if scriptHash in self.files:
            return self.files[scriptHash]

        return None