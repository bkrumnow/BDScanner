def getScore(key, detectionPatterns, detectionTopic):
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

def validateKeyPresence(detectionPatterns, detectionKeys):
    if detectionKeys == None:
        return True

    for detectionKey in detectionKeys:
        if detectionKey in detectionPatterns.keys():
            return True
    return False