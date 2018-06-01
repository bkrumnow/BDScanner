###############################################################################################################
## DetectionPattern.py
## Responsible for the creation of a DetectionPattern instance
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

import DetectionPattern

# The separation of the construction of the DetectionPattern serves for now only the purpose
# for the separation of concerns for future development
def createDetectionPattern(value, name, patterns, prerequisites=None, determinative=False,):
    return DetectionPattern.DetectionPattern(value, name, patterns, prerequisites, determinative)