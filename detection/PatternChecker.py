import sys

def checkPattern(data, pattern, scriptPath):
    try:
        if pattern in data:
            return 1
        else:
            return 0
    except:
        print("Unknown data format %s %s" % (scriptPath)) #, sys.exc_info()[0]))
        return -1