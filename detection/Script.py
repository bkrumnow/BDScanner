class Script:
    detectionPatterns = {}
    identifier = ''
    URL = ''

    def __init__(self, id):
        self.identifier = id


    def addDetectionPattern(self, topic, searchPattern):
        if topic in self.detectionPatterns:
            searchPatterns = self.detectionPatterns[topic];
        else:
            searchPatterns = []

        if searchPattern not in searchPatterns:
            searchPatterns.append(searchPattern)

        self.detectionPatterns[topic] = searchPatterns