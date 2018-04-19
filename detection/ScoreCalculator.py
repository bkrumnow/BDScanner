categories = {}

#Properties that are Web bot specific
categories['1'] = ['DocumentKeys_SelChromeChromium',
'DocumentKeys_SelIE',
'DocumentKeys_Misc.',
'NavigatorAttr_Selenium',
'WindowKeys_PhantomJSWebbot',
'WindowKeys_Nightmare',
'WindowKeys_SelIE'
]

#Values that are web bot specific
categories['2'] = ['General_UserAgent',
'General_BlackList'
]

#Presence / absence of Properties that can identify a web bot (they are more reliable / straight forward than category 4)
categories['3'] = ['DocumentKeys_PhantomJS',
'DocumentKeys_Nightmare',
'NavigatorAttr_PhantomJS',
'WindowKeys_PhantomJSGeneral',
'WindowKeys_Misc'
]

#JS properties + value that can identify a web bot
categories['4'] = ['General_',
'General_ColorDepth',
'General_HardwareConcurrency',
'General_Canvas',
'General_WebGL',
'General_LiedLanguages',
'General_TouchSupport',
'General_Fonts',
'General_FlashSupport',
'General_Plugins',
'General_StackTrace',
'General_WebSecurity',
'General_PopupSuppression',
'General_MimeTypes',
'General_Languages',
'General_Images',
'General_Misc',
'NavigatorAttr_Misc.'
]

def calculateScore(script):
    userAgentCheck = False
    for key, detectionPattern in script.detectionPatterns.iteritems():
        amountOfPatterns = len(script.detectionPatterns[key].patterns)

        if key in categories['1']:
            script.score = script.score + (amountOfPatterns * 12.0)

        elif key in categories['2']:
            script.score = script.score + (amountOfPatterns * 12.0)
            if key == 'General_UserAgent':
                userAgentCheck = True
        elif key in categories['3']:
            if userAgentCheck:
                script.score = script.score + (amountOfPatterns * 0.2)

        elif key in categories['4']:
            script.score = script.score + (amountOfPatterns * detectionPattern.score)


