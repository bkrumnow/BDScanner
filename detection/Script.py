###############################################################################################################
## Script.py
## Represents a web page script
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

from . import RegisteredDetectionTopic
from . import BotDetectionValueManager
import hashlib

class Script:

    def __init__(self, id, data):
        self.identifier = id
        self.detectionPatterns = {}
        self.repeatingPatterns = []
        self.URL = ''
        self.score = 0
        self.detectionPatternHash = 0
        self.repeatingPatternHash = 0
        self.hash = None
        self.data = data
        self.scriptLength = len(data)
        self.categories = []
        self.checkForRepeatingPatterns = True

    #A repeating pattern provides the context about it origins
    def addRepeatingPattern(self, pattern):
        if pattern not in self.repeatingPatterns:
            self.repeatingPatterns.append(pattern[0])
            self.repeatingPatternHash = self.repeatingPatternHash + hash(pattern[0]);

    #Add a pattern that match with the script content
    #A category will reveal the detection category : literal, bot detetion property  / value etc
    def addDetectionPattern(self, category, topic, searchPattern, score, prerequisites):
        if category == 'DetectorPatterns':
            self.checkForRepeatingPatterns = False

        if category not in self.categories:
            self.categories.append(category)

        if topic in self.detectionPatterns:
            detectionPattern = self.detectionPatterns[topic];
            detectionPattern.patterns.append(searchPattern)
            self.detectionPatterns[topic] = detectionPattern
        else:
            self.detectionPatterns[topic] = RegisteredDetectionTopic.RegisteredDetectionTopic(score, searchPattern, prerequisites)

    #After looping through the detection pattern the detection score based upon detection pattern will be calulated
    def calculateDetectionValue(self):
        for key, detectionPattern in self.detectionPatterns.items():
            detectionPattern.totalScore = BotDetectionValueManager.getDetectionValue(key, self.detectionPatterns, detectionPattern)
            self.score = self.score + detectionPattern.totalScore

        self.detectionPatternHash = self.detectionPatternHash + detectionPattern.hash


    def get_ssh224(self):
        data = self.data.replace(" ", "")
        data = data.replace("\n","")
        my_hash = hashlib.sha224(data.encode('utf-8'))
        return my_hash.hexdigest()

    #Override build in function __hash__
    def __hash__(self):
            if not self.hash:
                self.hash = hash((self.score, self.scriptLength, self.detectionPatternHash))
            return self.hash