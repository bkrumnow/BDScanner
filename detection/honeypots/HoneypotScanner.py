from patterns import InlineStylePatterns, ScriptPatterns, ExternalStylePatterns
from detection import PatternChecker
#from selenium.common.exceptions import StaleElementReferenceException

class HoneypotScanner:
    def __init__(self):
        self.honeypotElements = []
        self.inlineStylePatterns = InlineStylePatterns.InlineStylePatterns()
        self.scriptPatterns = ScriptPatterns.ScriptPatterns()

    def scan(self, driver, pageScripts):
        for element in driver.find_elements_by_tag_name('input'):

            id = self.getElementAtt(element, 'id')
            name = self.getElementAtt(element, 'name')
            elementClass = self.getElementAtt(element, 'class')
            type = self.getElementAtt(element, 'type')
            style = self.getElementAtt(element, 'style')

            #We assume that when there is no identifier it is not worth checking as
            #Serverside is not able to check the value of it
            if not (id or name):
                continue;

            identifier = id if id else name

            categories = []
            allPatterns = []

            #1
            if type == 'hidden':
                categories.append('type')
                allPatterns.append('typeHidden')

            #2
            self.checkCategory('literals', lambda: self.checkLiterals(id, name, elementClass), categories, allPatterns)

            #3
            if style:
                self.checkCategory('inlineStyle', lambda: self.checkInlineStyle(identifier, style), categories, allPatterns)

            #4
            if len(categories) == 0 and (elementClass or id):
                self.checkCategory('externalStyle', lambda: self.checkExternalStyle(driver, identifier, element), categories, allPatterns)

            #5
            if len(categories) == 0:
                self.checkCategory('parentStyle', lambda: self.checkParentStyle(driver, identifier, element), categories, allPatterns)

            if (len(categories) > 0):
                self.honeypotElements.append((id, name, categories, allPatterns))
#                print "@ %s %s" % (identifier, categories, patterns)
        return self.honeypotElements

    def checkCategory(self, category, func, categories, allPatterns):
        patterns = []
        patterns = func()
        if len(patterns) > 0:
            categories.append(category)
            allPatterns.extend((patterns))

    def checkLiterals(self, id, name, elementClass):
        obviousNames = ['honeypot', 'honey', 'trap', 'spam', 'norobot', 'leaveempty', 'nohuman', 'robots']

        patterns = []
        for obvName in obviousNames:
            if id == obvName or name == obvName or elementClass == obvName:
                patterns.append(obvName)
                break
        return patterns;

    def checkInlineStyle(self, identifier, style):
        patterns = []
        for pattern in self.inlineStylePatterns.patterns:
            for patternValue in pattern[2]:
                if PatternChecker.checkPattern(style, patternValue, identifier):
                    patterns.append(pattern[1])
        return patterns

    def checkExternalStyle(self, driver, identifier, element):
        try:
            properties = driver.execute_script('return window.getComputedStyle(arguments[0], null);', element)
            return ExternalStylePatterns.checkStyleProperties(properties, False)
        except:
            return []

    def checkParentStyle(self, driver, identifier, element):
        patterns = []
        try:
            parentElement = element.find_element_by_xpath("..");
        except:
            return patterns

        style = self.getElementAtt(parentElement, 'style')
        if style:
            for pattern in self.inlineStylePatterns.parentPatterns:
                for patternValue in pattern[2]:
                    if PatternChecker.checkPattern(style, patternValue, identifier):
                        patterns.append(pattern[1])
                        break

        #check external properties of parent
#        if not found:
#            try:
#                found = self.checkExternalStyle(driver, identifier, parentElement, categories)
#                parentElement = self.parentIsPresent(element)
#            except StaleElementReferenceException:
#                parentElement = self.parentIsPresent(element)
#                print "second attempt", parentElement
#
#                found = self.checkExternalStyle(driver, identifier, parentElement, categories)

        if len(patterns) == 0: #check parent
            patterns = self.checkParentStyle(driver, identifier, parentElement)

        return patterns

    def parentIsPresent(self, element, max_attempts=3):
        attempt = 1
        while True:
            try:
                return element.find_element_by_xpath("..")
            except StaleElementReferenceException:
                if attempt == max_attempts:
                    raise
                attempt += 1


#    def checkScriptPatterns(self, identifier, pageScripts, categories):
#        #construct element specific selectors
#        self.scriptPatterns.constructElementSpecificPatterns(identifier)
#        for pattern in self.inlineStylePatterns.parentPatterns:
#            found = False
#            for patternValue in pattern[2]:
#                for script in pageScripts:
#                    if PatternChecker.checkPattern(script, patternValue, identifier):
#                        categories.append(5)
#                        found = True
#                        break
#                if found:
#                    break


    def getElementAtt(self, element, att):
        try:
            attribute = element.get_attribute(att)
        except:
           attribute = None

        return attribute