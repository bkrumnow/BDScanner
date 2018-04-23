categories = {}
preConditions = {}

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
categories['2'] = ['General_UserAgent', 'General_UserAgentElectron', 'General_UserAgentWOW',
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
categories['4'] = ['General_ColorDepth',
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
'NavigatorAttr_Misc.',
'NavigatorAttr_UserAgent'
]

preConditions['General_UserAgentWOW'] = ['NavigatorAttr_UserAgent']



def getScore(key, amountOfPatterns, userAgentKey, detectionPattern):
    score = 0
    if key in categories['1']:
#            print('#1 %s' % amountOfPatterns)
        score = (amountOfPatterns * 12.0)

    elif key in categories['2']:
#            print('#2 %s' % amountOfPatterns)
        score =  (amountOfPatterns * 12.0)
    elif key in categories['3']:
        if userAgentKey:
#                print('#3 %s' % amountOfPatterns)
            score = (amountOfPatterns * 0.2)

    elif key in categories['4']:
#            print('@@@ %s %s' % (script.score, detectionPattern.score))
        score =  detectionPattern.score
#            print('#4::: %s' % (script.score))
    return score