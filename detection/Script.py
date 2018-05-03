import DetectionPattern, ScoreCalculator

class Script:

    def __init__(self, id, data):
        self.identifier = id
        self.detectionPatterns = {}
        self.companyPatterns = []
        self.headless = False
        self.headfull = False
        self.URL = ''
        self.score = 0
        self.detectionPatternHash = 0
        self.companyPatternHash = 0
        self.fromCache = False
        self.hash = None
        self.data = data

    def addCompanyPattern(self, companyPattern):
        if companyPattern not in self.companyPatterns:
            self.companyPatterns.append(companyPattern[0])
            self.companyPatternHash = self.companyPatternHash + hash(companyPattern[0]);

    def addDetectionPattern(self, topic, searchPattern, score):

        if topic in self.detectionPatterns:
            detectionPattern = self.detectionPatterns[topic];
            detectionPattern.patterns.append(searchPattern)
            self.detectionPatterns[topic] = detectionPattern
        else:
            self.detectionPatterns[topic] = DetectionPattern.DetectionPattern(score, searchPattern)

    def calculateScore(self):
        for key, detectionPattern in self.detectionPatterns.iteritems():
            detectionPattern.totalScore = ScoreCalculator.getScore(key, self.detectionPatterns, detectionPattern)
            self.score = self.score + detectionPattern.totalScore
            if not (self.headfull and self.headless):
                ScoreCalculator.determineTypeOfDetection(key, self)

        self.detectionPatternHash = self.detectionPatternHash + detectionPattern.hash

    def __hash__(self):
            if not self.hash:
                self.hash = hash((self.score, len(self.data), self.detectionPatternHash, self.companyPatternHash))
            return self.hash
