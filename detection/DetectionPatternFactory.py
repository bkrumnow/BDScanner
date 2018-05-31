import DetectionPattern

def createDetectionPattern(value, name, patterns, prerequisites=None, determinative=False,):
    return DetectionPattern.DetectionPattern(value, name, patterns, prerequisites, determinative)