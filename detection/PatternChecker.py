import re

def checkPattern(data, patterns, scriptPath):
    try:
        retValue = 0

        for pattern in patterns:
            compiledPattern = re.compile(pattern)
#
#            if '_Selenium_IDE_Recorder' in pattern:
#                print ('comparing %s %s' % (pattern, data))

            if re.search(compiledPattern.pattern, data, re.IGNORECASE):
                retValue = 1
            else:
                retValue = 0
                break;

#        print 'retvalue %s' % retValue
        return retValue
    except:
        print("Unknown data format %s %s" % (scriptPath, pattern)) #, sys.exc_info()[0]))
        return -1