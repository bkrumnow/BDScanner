class ScriptPatterns:

    def __init__(self):
        self.patterns = [];
        self.jsPrefix = 'getelementbyid\([ ]?['|"]'
        self.$Prefix = '\$\(["|']\#'
        self.jsPostfixDisplay = '[ ]?['|"]\).style.display = ['|"]none['|"]'
        self.$PostfixDisplay = '[ ]?['|"]\).css\(["|']display["|'][ ]?,[ ]?["|']none'
        self.$PostfixHide = '[ ]?['|"]\).hide()'

    def constructElementSpecificPatterns(identifier):
        jsDisplay = self.jsPrefix + identifier + jsPostfixDisplay
        $Display = self.$Prefix + identifier + $PostfixDisplay
        $Hide = self.$Prefix + identifier + self.$PostfixHide

        jsDisplayPattern = (12.0,  "JSDisplay", [jsHide])
        $DisplayPattern = (12.0, "$Display", [$Display])
        $HidePattern = (12.0, "$Display", [$Display])

        self.patterns.extend((jsDisplayPattern,
        $DisplayPattern,
        $HidePattern))
