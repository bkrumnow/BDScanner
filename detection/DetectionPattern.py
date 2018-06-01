###############################################################################################################
## DetectionPattern.py
## Embodies a detection pattern that will be used to identify web bot detection scripts / sites
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

class DetectionPattern:
    def __init__(self, value, name, patterns, prerequisites=None, determinative=False):
        self.value = value;
        self.name = name
        self.patterns = patterns
        self.prerequisites = prerequisites
        self.determinative = determinative