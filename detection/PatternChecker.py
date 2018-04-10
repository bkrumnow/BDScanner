import re

def checkPattern(data, patterns, scriptPath, ignoreCase):
    try:
        retValue = 0

        for pattern in patterns:
            compiledPattern = re.compile(pattern)
#
#            if '_Selenium_IDE_Recorder' in pattern:
#                print ('comparing %s %s' % (pattern, data))

            if ignoreCase:
                result = re.search(compiledPattern.pattern, data, re.IGNORECASE)
            else:
                result = re.search(compiledPattern.pattern, data)

            if result:
                retValue = 1
            else:
                retValue = 0
                break;

#        print 'retvalue %s' % retValue
        return retValue
    except:
        print("Unknown data format %s %s" % (scriptPath, pattern)) #, sys.exc_info()[0]))
        return -1