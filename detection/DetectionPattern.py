class DetectionPattern:
    def __init__(self, score, pattern):
        self.score = score;
        self.patterns = [pattern]
        self.hash = hash((self.score, pattern))