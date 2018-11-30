###############################################################################################################
## PatternChecker.py
## Analysis script content by making use of regular expressions
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

import re

#pre-processes patternObject (detectionPatterns that it can be used to analyse the contents of the data param
def checkPattern(data, patternObject, origin):
    ignoreCase = True
    OR = False #so it is an AND condition
    stringPattern = ''

    if (type(patternObject) is tuple):

        option = patternObject[1]
        patternObject = patternObject[0]

        if option == 'C': #Case Sensitive
            ignoreCase = False
        elif option == 'OR':
            OR = True

    if type(patternObject) is str:
        patterns = [patternObject]
        stringPattern = patternObject
    else:
        patterns = patternObject
        stringPattern = str(patternObject)

    return (analyse(data, patterns, origin, ignoreCase, OR), stringPattern)

# analyses the data by making use of the patterns provided
# if it maches a pattern 1 will be returned if this is not the case 0 will be returned
# If an exception will raise -1 will be returned
def analyse(data, patterns, origin, ignoreCase =True, OR=False):
    try:
        retValue = 0
        for pattern in patterns:
            result = None
            skip = False

            if type(pattern) is list:  # ([['1'],['2'], ['useragent', 'navigator']], 'OR')
                if len(pattern) > 1:
                    #recursive : check all patterns in the list
                    result = analyse(data, pattern, origin)
                    skip = True
                else:
                    pattern = pattern[0]

            #perform regex search with option : case sensitive : true / false
            if not skip:
                compiledPattern = re.compile(pattern)

                if ignoreCase:
                    result = re.search(compiledPattern.pattern, data, re.IGNORECASE)
                else:
                    result = re.search(compiledPattern.pattern, data)

            # analyse result in combination with options
            if result:
                retValue = 1
                if OR:
                    break;
            else:
                retValue = 0
                if not OR:
                    break;

        return retValue
    except:
        print("Unknown data format %s %s" % (origin, patterns)) #, sys.exc_info()[0]))
        return -1