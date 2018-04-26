class InlineStylePatterns:

  def __init__(self):
    self.patterns = [];
    self.parentPatterns = []
    absolutePosition = (12.0,  "AbsolutePosition", ['((left:)|(right:)|(top:)|(bottom:))( -|-)[0-9]{3}px'])
    displayNone = (12.0,  "DisplayNone", ['display:([ ]?)none(?![a-zA-z-])'])
    visibilityHidden = (12.0,  "VisibilityHidden", ['visibility:([ ]?)hidden(?![a-zA-z-])'])
    visibilityCollapse = (12.0,  "VisibilityCollapse", ['visibility:([ ]?)collapse(?![a-zA-z-])'])
    opacity = (12.0,  "opacity", ['opacity:([ ]?)0(?![a-zA-z-])'])
    negativeZIndex = (12.0,  "NegativeZIndex", ['z-index:([ ]?( -|-)([0-9]{1,3}(?![a-zA-z-])))'])
    size = (12.0,  "NegativeZIndex", ['(width:)|(height:)([ ]?)0px(?![a-zA-z-])'])

#   Parent section
    textIndent = (12.0,  "TextIndent", [['text-indent:([ ]?)100%(?![a-zA-z-])', 'white-space:([ ]?)nowrap(?![a-zA-z-])', 'overflow:([ ]?)hidden(?![a-zA-z-])']])

    self.patterns.extend((absolutePosition,
    displayNone,
    visibilityHidden,
    visibilityCollapse,
    opacity,
    negativeZIndex,
    size))

    self.parentPatterns.extend((displayNone,
    textIndent))