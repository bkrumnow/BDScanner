###############################################################################################################
## DB.py
## Responsible for persisting scripts and detection patterns
##
## License 2018 Open Source License
## Written By: Gabry Vlot (https://github.com/GabryVlot)
## Project: Detecting Web bot Detecting | BotDetectionScanner (https://github.com/GabryVlot/BotDetectionScanner)
###############################################################################################################

import random
from detection import FileManager
from automation.utilities import db_utils

class DB:

    def __init__(self, dataPath, scripts):
        self.scripts = scripts
        self.dataPath = dataPath

    def insertScript(self, sock, id, visit_id, categories, identifier, URL, scriptLength, score, context, duplicate, hash):
        try:
            query = ("INSERT INTO Scripts (id, visit_id, categories, name, URL, script_length, score, context, duplicate, hash) VALUES (?,?,?,?,?,?,?,?,?,?)",
            (id, visit_id, categories, identifier, URL, scriptLength, score, context, duplicate, hash))
            sock.send(query)
        except:
            print("Error inserting script record %s %s" % (identifier, id))

    def insertDetection(self, sock, scriptId, topic, pattern, context, score):
        try:
            query = ("INSERT INTO DetectionPatterns (script_id, topic, pattern, context, score) VALUES (?,?,?,?,?)",
            (scriptId, topic, pattern, context, score))
            sock.send(query)
        except:
            print("Error inserting detection record %s %s %s" % (scriptId, topic, pattern))

    def insertHoneypotElement(self, sock, visit_id, elementId, name, category, patterns, score):
#        try:
            query = ("INSERT INTO HoneypotElements (visit_id, element_id, name, categories, patterns, score) VALUES (?,?,?,?,?,?)",
            (visit_id, elementId, name, category, patterns, score))
            sock.send(query)
#        except:
#            print("Error inserting honeypot element record %s %s %s" % (visit_id, elementId, name))

    def updateSiteVisit(self, sock, score, visitId, scriptId, cat_a, cat_b, cat_c, dist_a, dist_b, dist_c):
        try:
            query = ("UPDATE site_visits SET score=?, scriptId=?, cat_a=?, cat_b=?, cat_c=?, dist_a=?, dist_b=?, dist_c=? WHERE visit_id=?",
            (score, scriptId, cat_a, cat_b, cat_c, dist_a, dist_b, dist_c, visitId))
            sock.send(query)
        except:
            print("Error updating site_visit record %s %s %s" % (score, visitId, sys.exc_info()[0]))


    def persistResults(self, sock, visit_id, manager_params):
        print('PERSIST SCRIPTS %s' % len(self.scripts))
        highestScore =0
        highestScoreScriptId=''
        cat_a = cat_b = cat_c = dist_a = dist_b = dist_c = 0

        #print('self %s' % self)
        for script in self.scripts:
            scriptHash = hash(script)
            existsInCache = self.checkCache(sock, scriptHash, manager_params)

            duplicate = ''
            context = ','.join(script.repeatingPatterns)

            scriptId = str(visit_id) + '_' + script.identifier + '_' + str(random.randint(1,101)*5)
            if script.score > highestScore:
                highestScore = script.score
                highestScoreScriptId = scriptId

            if existsInCache:
                duplicate = existsInCache
                scriptHash = -1
            else:
                FileManager.persistFile(script.identifier, script.data, self.dataPath + '/files/' + str(visit_id) + '/')
                for key, detectionPattern in script.detectionPatterns.items():
                    self.insertDetection(sock, scriptId, key, ','.join(detectionPattern.patterns), context, detectionPattern.totalScore)

            self.insertScript(sock, scriptId, visit_id, ','.join(script.categories), script.identifier, script.URL, script.scriptLength, script.score, context, duplicate, scriptHash)

#        print('PERSIST HONEYPOTS %s' % len(self.honeypotElements))
#        for honeypotElement in self.honeypotElements:
#            self.insertHoneypotElement(sock, visit_id, honeypotElement[0], honeypotElement[1], ','.join(honeypotElement[2]), ','.join(honeypotElement[3]), 12)

        self.updateSiteVisit(sock, highestScore, visit_id, highestScoreScriptId, cat_a, cat_b, cat_c, dist_a, dist_b, dist_c)

    def checkCache(self, sock, scriptHash, manager_params):
        rows = db_utils.query_db(manager_params['database_name'], "SELECT id FROM Scripts WHERE hash = " + str(scriptHash) + ";")
        if not rows:
            return None
        else:
            return rows[0]['id']

    def printScripts(self):
        for script in self.scripts:
            print ("Company | Categories %s %s %s" % (script.repeatingPatterns, ','.join(script.categories), hash(script)))
            for key, detectionPattern in script.detectionPatterns.iteritems():
                print("Pattern %s %s %s %s" % (key, ','.join(detectionPattern.patterns), detectionPattern.score, detectionPattern.totalScore))