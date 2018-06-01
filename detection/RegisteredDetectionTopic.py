###############################################################################################################
## RegisteredDetectionTopic.py
## Represents a detection topic e.g. BotDetectionProperties_selenium that aggregates the found patterns in this
## category and also the total score
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

class RegisteredDetectionTopic:
    def __init__(self, score, pattern, prerequisites):
        self.score = score;
        self.totalScore = 0
        self.patterns = [pattern]
        self.prerequisites = prerequisites
        self.hash = hash((self.score, pattern))