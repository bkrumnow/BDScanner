class FileCache:
    def __init__(self):
        self.files = {}

    def addToCache(script):
        self.files[script.hash] = "hoi"

    def getCachedObject(script):
        if script.hash in self.files:
            return self.files[script.hash]

        return None