categories = {}

#Properties that are Web bot specific
categories['1'] = ['DocumentKeys_SelChromeChromium',
'DocumentKeys_SelIE',
'DocumentKeys_Misc.',
'NavigatorAttr_Selenium',
'WindowKeys_PhantomJSWebbot',
'WindowKeys_ChromiumWebbot',
'WindowKeys_Nightmare',
'WindowKeys_SelIE'
]

#Values that are web bot specific
#prerequist : navigator.useragent
categories['2'] = ['General_UserAgent', 'General_UserAgentElectron', 'General_UserAgentWOW',
'General_BlackList'
]

#Presence / absence of Properties that can identify a web bot (they are more reliable / straight forward than category 4)
#prerequist : a detection pattern in category 2
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

#Bot detection file literals
categories['5'] = ['General_DistilMisc']

categories['headless'] = categories['2']
categories['headless'].append('WindowKeys_PhantomJSWebbot')

categories['headfull'] = ['DocumentKeys_SelIE']

categories['headfullAndHeadless'] = ['DocumentKeys_SelChromeChromium',
'NavigatorAttr_Selenium',
'WindowKeys_ChromiumWebbot',
'WindowKeys_Nightmare']

def getScore(key, detectionPatterns, detectionPattern):
    score = 0
    amountOfPatterns = len(detectionPatterns[key].patterns)
    if key in categories['1']:

        score = detectionPattern.score * amountOfPatterns

    elif key in categories['2']:
        if validateKeyPresence(detectionPatterns, ['NavigatorAttr_UserAgent']): #user agent property
            score =  detectionPattern.score * amountOfPatterns
    elif key in categories['3']:
        if validateKeyPresence(detectionPatterns, categories['2']): #user agent value
            score = detectionPattern.score * amountOfPatterns

    elif key in categories['4'] or key in categories['5']:
        score =  detectionPattern.score * amountOfPatterns

    return score

def validateKeyPresence(detectionPatterns, detectionKeys):
    for detectionKey in detectionKeys:
        if detectionKey in detectionPatterns.keys():
            return True
    return False

def determineTypeOfDetection(key, script):
    if key in categories['headfullAndHeadless']:
        script.headless = True
        script.headfull = True
    elif key in categories['headfull']:
        script.headfull = True
    elif key in categories['headless']:
        script.headless = True