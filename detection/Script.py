class Script:
    def __init__(self, id):
        self.identifier = id
        self.detectionPatterns = {}
        self.URL = ''

    def addDetectionPattern(self, topic, searchPattern):
        searchPatterns = []
        if topic in self.detectionPatterns:
            searchPatterns = self.detectionPatterns[topic];
        else:
            searchPatterns = []

        if searchPattern not in searchPatterns:
            searchPatterns.append(searchPattern)

        self.detectionPatterns[topic] = searchPatterns