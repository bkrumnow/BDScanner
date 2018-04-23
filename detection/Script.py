import DetectionPattern, ScoreCalculator

class Script:

    def __init__(self, id, fileLength):
        self.identifier = id
        self.detectionPatterns = {}
        self.companyPatterns = []
        self.URL = ''
        self.score = 0
        self.obfuscated = False
        self.fileLength = fileLength
        self.detectionPatternHash = 0
        self.companyPatternHash = 0

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

    def validateKeyPresence(self, detectionKeys):
        present = False
        for detectionKey in detectionKeys:
            if detectionKey in self.detectionPatterns.keys():
                return True


    def calculateScore(self):
        userAgentKey = self.validateKeyPresence(['General_UserAgent', 'General_UserAgentElectron']) #OR construction

        for key, detectionPattern in self.detectionPatterns.iteritems():
            validated = True
            if key in ScoreCalculator.preConditions:
                validated = self.validateKeyPresence(ScoreCalculator.preConditions[key])

            if validated:
                amountOfPatterns = len(self.detectionPatterns[key].patterns)

                score = ScoreCalculator.getScore(key, amountOfPatterns, userAgentKey, detectionPattern)
                self.score = self.score + score

            self.detectionPatternHash = self.detectionPatternHash + detectionPattern.hash

    def __hash__(self):
            return hash((self.score, self.obfuscated, self.fileLength, self.detectionPatternsHash, self.companyPatternHash))
