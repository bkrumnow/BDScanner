class RegisteredDetectionTopic:
    def __init__(self, score, pattern, prerequisites):
        self.score = score;
        self.totalScore = 0
        self.patterns = [pattern]
        self.prerequisites = prerequisites
        self.hash = hash((self.score, pattern))