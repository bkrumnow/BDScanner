from detection import PatternChecker

def checkStyleProperties(properties, parent):
    patterns = []
    if checkPropertyValue(properties, 'display', 'none'):
        patterns.append('display:none')
    elif checkPropertyValue(properties, 'visibility', 'hidden') or checkPropertyValue(properties, 'visibility', 'collapse'):
        patterns.append('visibility:hidden/collapse')
    elif checkPropertyValue(properties, 'opacity', '0'):
        patterns.append('opacity:0')
    elif checkPropertyValue(properties, 'position', 'relative') and checkPropertyValue(properties, 'z-index', '( -|-)[0-9]{1,3}', True):
        patterns.append('z-index:negative')
    elif parent and checkPropertyValue(properties, 'text-indent', '100%') and checkPropertyValue(properties, 'white-space', 'nowrap') and checkPropertyValue(properties, 'overflow', 'hidden'):
        patterns.append('text-indent')
    elif checkPropertyValue(properties, 'width', '0px') or checkPropertyValue(properties, 'height', '0px'):
        patterns.append('size')
    elif checkNegativePosition(properties):
        patterns.append('negativePosition')

    return patterns


def checkNegativePosition(properties):
    negativePosition = False #left: / right: / top: / bottom: -[123]
    negativePattern = '( -|-)[0-9]{3}px'

    positions = ['left', 'right', 'top', 'bottom']

    for position in positions:
        try:
            negativePosition = properties[position]
            negativePosition = checkPropertyValueByRegEx(negativePosition, negativePattern)
        except:
            negativePosition = 0

        if negativePosition:
            break

    return negativePosition


def checkPropertyValue(properties, property, valueToCompare, regEx=False):
    propertyValue = None
    try:
        propertyValue =  properties[property]
    except:
        propertyValue = None

    if regEx:
        return checkPropertyValueByRegEx(propertyValue, valueToCompare)

    return propertyValue == valueToCompare

def checkPropertyValueByRegEx(propertyValue, pattern):
    return PatternChecker.search(propertyValue, [pattern], 'ExternalStylePattern', False, False)