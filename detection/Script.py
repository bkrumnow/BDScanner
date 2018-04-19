import DetectionPattern

class Script:
    def __init__(self, id):
        self.identifier = id
        self.detectionPatterns = {}
        self.companyPatterns = []
        self.URL = ''
        self.score = 0
        self.obfuscated = False

    def addCompanyPattern(self, companyPattern):
        if companyPattern not in self.companyPatterns:
            self.companyPatterns.append(companyPattern[0])

    def addDetectionPattern(self, topic, searchPattern, score):
        if topic in self.detectionPatterns:
            detectionPattern = self.detectionPatterns[topic];
            detectionPattern.score = detectionPattern.score + score;
            detectionPattern.patterns.append(searchPattern)
#            if searchPattern not in searchPatterns:
            self.detectionPatterns[topic] = detectionPattern
        else:
            self.detectionPatterns[topic] = DetectionPattern.DetectionPattern(score, searchPattern)