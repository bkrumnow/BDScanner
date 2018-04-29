import re

def checkPattern(data, patternObject, origin):
    ignoreCase = True
    disjunction = False

    if (type(patternObject) is tuple):
        option = patternObject[1]
        patternObject = patternObject[0]

        if option == 'C': #Case Sensitive
            ignoreCase = False
        elif option == 'OR':
            disjunction = True

    if type(patternObject) is str:
        patterns = [patternObject]
    else:
        patterns = patternObject

    return search(data, patterns, origin, ignoreCase, disjunction)


def search(data, patterns, origin, ignoreCase =True, disjunction=False):
#    try:
        retValue = 0

        for value in patterns:
            compiledPattern = re.compile(value)

            if ignoreCase:
                result = re.search(compiledPattern.pattern, data, re.IGNORECASE)
            else:
                result = re.search(compiledPattern.pattern, data)

#            print "Checking %s %s %s" % (value, result, ignoreCase)
        #
        #            if 'electron' in value:
        #                print ('comparing %s %s %s' % (value, disjunction, result))

            if result:
                retValue = 1
                if disjunction:
                    break;
            else:
                retValue = 0
                if not disjunction:
                    break;

        #        if 'electron' in value:
        #            print 'retvalue %s' % retValue
        return retValue
#    except:
#        print("Unknown data format %s %s" % (origin, patterns)) #, sys.exc_info()[0]))
#        return -1