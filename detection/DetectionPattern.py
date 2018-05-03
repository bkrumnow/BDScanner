class DetectionPattern:
    def __init__(self, score, pattern):
        self.score = score;
        self.totalScore = 0
        self.patterns = [pattern]
        self.hash = hash((self.score, pattern))