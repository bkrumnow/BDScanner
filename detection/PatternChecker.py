import re

def checkPattern(data, pattern, scriptPath):
    try:

        compiledPattern = re.compile(pattern)
        if re.search(compiledPattern.pattern, data, re.IGNORECASE):
            return 1
        else:
            return 0
    except:
        print("Unknown data format %s " % (scriptPath)) #, sys.exc_info()[0]))
        return -1