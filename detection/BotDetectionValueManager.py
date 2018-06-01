###############################################################################################################
## BotDetectionValueManager.py
## Is responsible for calculating the bot detection value
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

#Detemines detection value PER script based upon pattern category
#In case of the pattern BotDetectionProperties and BotDetectionValues there are prerequisites in place towars Browser properties
#If the prerequisites are not met the score will be dividd by two, reason:
#In some case the webbot detection value/property resides in a separated file. This means it is not fair to discard the whole score
#This implementation contributes to the fact that
#1 Bot detection script still can be detected without Browser Properties in the SAME file
#2 Libraries toward specific browser detection are still taken into account because libraries will usually contain the browser properties in the same file
def getDetectionValue(key, detectionPatterns, detectionTopic):
    score = 0
    amountOfPatterns = len(detectionPatterns[key].patterns)

    if 'KnownDetectionPatterns' in key:
        score = detectionTopic.score * amountOfPatterns
    elif 'BotDetectionProperties' in key:
        score = detectionTopic.score * amountOfPatterns
        if not validateKeyPresence(detectionPatterns, detectionTopic.prerequisites):
            score = score / 2
    elif 'BotDetectionValues' in key:
        score = detectionTopic.score * amountOfPatterns
        if not validateKeyPresence(detectionPatterns, detectionTopic.prerequisites):
            score = score / 2
    elif 'BrowserCharacteristics' in key:
        score =  detectionTopic.score * amountOfPatterns
    elif 'BotDetectionLiterals' in key:
        score = (detectionTopic.score * amountOfPatterns) / 2
    return score

# validatates the keys of the prerequisites with detected pattern keys
def validateKeyPresence(detectionPatterns, detectionKeys):
    if detectionKeys == None:
        return True

    for detectionKey in detectionKeys:
        if detectionKey in detectionPatterns.keys():
            return True
    return False