class DetectionPattern:
    def __init__(self, value, name, patterns, prerequisites=None, determinative=False):
        self.value = value;
        self.name = name
        self.patterns = patterns
        self.prerequisites = prerequisites
        self.determinative = determinative