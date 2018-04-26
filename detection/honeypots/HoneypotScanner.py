from patterns import InlineStylePatterns
from detection import PatternChecker

class HoneypotScanner:
    def __init__(self, visit_id):
        self.visitId = visit_id
        self.honeypotElements = []
        self.inlineStylePatterns = InlineStylePatterns.InlineStylePatterns()

    def scan(self, driver):
        for element in driver.find_elements_by_tag_name('input'):

            id = self.getElementAtt(element, 'id')
            name = self.getElementAtt(element, 'name')
            elementClass = self.getElementAtt(element, 'class')
            type = self.getElementAtt(element, 'type')
            style = self.getElementAtt(element, 'style')

            #1 check element stuff
            if not (id or name):
                continue;

            identifier = id if id else name

            categories = []
            if type == 'hidden':
                categories.append(1)

            self.checkLiterals(id, name, elementClass, categories)
            if style:
                self.checkInlineStyle(identifier, style, categories)

            if len(categories) == 0:
                self.checkParentInlineStyle(identifier, element, categories)
            if (len(categories) > 0):
                self.addHoneypotElement(id, name, categories)

            print "@ %s %s" % (identifier, categories)


    def checkLiterals(self, id, name, elementClass, categories):
        obviousNames = ['honeypot', 'honey', 'trap', 'spam', 'norobot', 'leaveempty', 'nohuman', 'robots']

        for obvName in obviousNames:
            if id == obvName or name == obvName or elementClass == obvName:
                categories.append(2)
                break

    def checkInlineStyle(self, identifier, style, categories):
        for pattern in self.inlineStylePatterns.patterns:
            for patternValue in pattern[2]:
                if PatternChecker.checkPattern(style, patternValue, identifier):
                    categories.append(3)

    def checkParentInlineStyle(self, identifier, element, categories):
        try:
            parentElement = element.find_element_by_xpath("..");
        except:
            return

        recur = True
        style = self.getElementAtt(parentElement, 'style')
        if style:
            for pattern in self.inlineStylePatterns.parentPatterns:
                for patternValue in pattern[2]:
                    if PatternChecker.checkPattern(style, patternValue, identifier):
                        categories.append(4)
                        recur = False
                        break

        if recur:
            self.checkParentInlineStyle(identifier, parentElement, categories)


    def getElementAtt(self, element, att):
        try:
            attribute = element.get_attribute(att)
        except:
           attribute = None

        return attribute


    def addHoneypotElement(self, id, name, category):
        self.honeypotElements.append((id, name, category))
