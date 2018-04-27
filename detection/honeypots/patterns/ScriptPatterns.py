class ScriptPatterns:

    def __init__(self):
        self.patterns = [];
        self.jsPrefix = 'getelementbyid\([ ]?[\'|\"]'
        self.jQueryPrefix = '\$\([\"|\']\#'
        self.jsPostfixDisplay = '[ ]?[\'|\"]\).style.display = [\'|\"]none[\'|\"]'
        self.jQueryPostfixDisplay = '[ ]?[\'|\"]\).css\([\"|\']display[\"|\'][ ]?,[ ]?[\"|\']none'
        self.jQueryPostfixHide = '[ ]?[\'|\"]\).hide()'

    def constructElementSpecificPatterns(self, identifier):
        self.patterns = []
        jsDisplay = self.jsPrefix + identifier + self.jsPostfixDisplay
        jQueryDisplay = self.jQueryPrefix + identifier + self.jQueryPostfixDisplay
        jQueryHide = self.jQueryPrefix + identifier + self.jQueryPostfixHide

        jsDisplayPattern = (12.0,  "JSDisplay", [jsDisplay])
        jQueryDisplayPattern = (12.0, "jQueryDisplay", [jQueryDisplay])
        jQueryHidePattern = (12.0, "jQueryDisplay", [jQueryDisplay])

#        print jsDisplay
#        print jQueryDisplay
#        print jQueryHide

        self.patterns.extend((jsDisplayPattern,
        jQueryDisplayPattern,
        jQueryHidePattern))
