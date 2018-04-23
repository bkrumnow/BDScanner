import re

def checkPattern(data, patterns, scriptPath, ignoreCase, disjunction):
    try:
        retValue = 0

        for pattern in patterns:
            compiledPattern = re.compile(pattern)

            if ignoreCase:
                result = re.search(compiledPattern.pattern, data, re.IGNORECASE)
            else:
                result = re.search(compiledPattern.pattern, data)
#
#            if 'electron' in pattern:
#                print ('comparing %s %s %s' % (pattern, disjunction, result))

            if result:
                retValue = 1
                if disjunction:
                    break;
            else:
                retValue = 0
                if not disjunction:
                    break;

#        if 'electron' in pattern:
#            print 'retvalue %s' % retValue
        return retValue
    except:
        print("Unknown data format %s %s" % (scriptPath, pattern)) #, sys.exc_info()[0]))
        return -1