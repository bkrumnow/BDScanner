import re

def checkPattern(data, patternObject, origin):
    ignoreCase = True
    disjunction = False
    stringPattern = ''

    if (type(patternObject) is tuple):

        option = patternObject[1]
        patternObject = patternObject[0]
        if option == 'C': #Case Sensitive
            ignoreCase = False
        elif option == 'OR':
            disjunction = True

    if type(patternObject) is str:
        patterns = [patternObject]
        stringPattern = patternObject
    else:
        patterns = patternObject
        stringPattern = str(patternObject)

    return (search(data, patterns, origin, ignoreCase, disjunction), stringPattern)


def search(data, patterns, origin, ignoreCase =True, disjunction=False):
#    try:
        retValue = 0

        for value in patterns:
            result = None
            skip = False

            if type(value) is list:  # ([['1'],['2'], ['useragent', 'navigator']], 'OR')
                if len(value) > 1:
                    result = search(data, value, origin)
                    skip = True
                else:
                    value = value[0]

            if not skip:
                compiledPattern = re.compile(value)

                if ignoreCase:
                    result = re.search(compiledPattern.pattern, data, re.IGNORECASE)
                else:
                    result = re.search(compiledPattern.pattern, data)

#            if 'BotPattern' in patterns:
#                print "Checking %s %s %s %s" % (value, result, ignoreCase, disjunction)

            if result:
                retValue = 1
                if disjunction:
                    break;
            else:
                retValue = 0
                if not disjunction:
                    break;

#        if 'BotPattern' in patterns:
#            print 'retvalue %s' % retValue
        return retValue
#    except:
#        print("Unknown data format %s %s" % (origin, patterns)) #, sys.exc_info()[0]))
#        return -1