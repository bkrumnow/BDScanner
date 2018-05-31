import RegisteredDetectionTopic, ScoreCalculator

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
        self.scriptLength = len(data)
        self.categories = []

    def addCompanyPattern(self, companyPattern):
        if companyPattern not in self.companyPatterns:
            self.companyPatterns.append(companyPattern[0])
            self.companyPatternHash = self.companyPatternHash + hash(companyPattern[0]);

    def addDetectionPattern(self, category, topic, searchPattern, score, prerequisites):
        if category not in self.categories:
            self.categories.append(category)

        if topic in self.detectionPatterns:
            detectionPattern = self.detectionPatterns[topic];
            detectionPattern.patterns.append(searchPattern)
            self.detectionPatterns[topic] = detectionPattern
        else:
            self.detectionPatterns[topic] = RegisteredDetectionTopic.RegisteredDetectionTopic(score, searchPattern, prerequisites)

    def calculateScore(self):
        for key, detectionPattern in self.detectionPatterns.iteritems():
            detectionPattern.totalScore = ScoreCalculator.getScore(key, self.detectionPatterns, detectionPattern)
            self.score = self.score + detectionPattern.totalScore

        self.detectionPatternHash = self.detectionPatternHash + detectionPattern.hash

    def __hash__(self):
            if not self.hash:
                self.hash = hash((self.score, self.scriptLength, self.detectionPatternHash, self.companyPatternHash))
            return self.hash
