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

    def insert_script(self, sock, id, visit_id, categories, identifier, url, script_length, score, context, duplicate, hash):
        try:
            params = {
                "id": id
                , "visit_id": visit_id
                , "categories": categories
                , "name": identifier
                , "URL": url
                , "script_length": script_length
                , "score": score
                , "context": context
                , "duplicate": duplicate
                , "hash": hash}
            sock.send(("Scripts", params))
        except:
            print("Error inserting script record {} {}".format(identifier, id))

    def insert_detection(self, sock, script_id, topic, pattern, context, score):
        try:
            params = {
                "script_id": script_id
                , "topic": topic
                , "pattern": pattern
                , "context": context
                , "score": score
            }
            sock.send(("DetectionPatterns", params))
        except:
            print("Error inserting detection record {} {} {}".format(scriptId, topic, pattern))

    def update_site_visits(self, sock, score, visitId, scriptId, cat_a, cat_b, cat_c, dist_a, dist_b, dist_c):
        try:
            query = "UPDATE site_visits SET score={}, cat_a={}, cat_b={}, cat_c={}, dist_a={}, dist_b={}, dist_c={} WHERE visit_id={}".format(
                score, cat_a, cat_b, cat_c, dist_a, dist_b, dist_c, visitId
            )
            sock.send(("create_table", query))
        except:
            print("Error updating site_visit record {} {} {}".format(score, visitId, sys.exc_info()[0]))


    def persist_results(self, sock, visit_id, manager_params):
        print('PERSIST SCRIPTS %s' % len(self.scripts))
        highestScore =0
        highestScoreScriptId=''
        cat_a = cat_b = cat_c = dist_a = dist_b = dist_c = 0

        #print('self %s' % self)
        for script in self.scripts:
            scriptHash = script.get_ssh224()
            existsInCache = self.checkCache(sock, scriptHash, manager_params)

            duplicate = ''
            context = ','.join(script.repeatingPatterns)

            scriptId = str(visit_id) + '_' + script.identifier + '_' + str(random.randint(1,101)*5)
            if script.score > highestScore:
                highestScore = script.score
                highestScoreScriptId = scriptId

            if existsInCache:
                duplicate = existsInCache
                #scriptHash = -1
            else:
                FileManager.persistFile(script.identifier, script.data, self.dataPath + '/files/' + str(visit_id) + '/')
                for key, detectionPattern in script.detectionPatterns.items():
                    self.insert_detection(sock, scriptId, key, ','.join(detectionPattern.patterns), context, detectionPattern.totalScore)

            self.insert_script(sock, scriptId, visit_id, ','.join(script.categories), script.identifier, script.URL, script.scriptLength, script.score, context, duplicate, scriptHash)

        self.update_site_visits(sock, highestScore, visit_id, highestScoreScriptId, cat_a, cat_b, cat_c, dist_a, dist_b, dist_c)

    def checkCache(self, sock, scriptHash, manager_params):
        print('SELECT id FROM Scripts WHERE hash = "' + scriptHash + '";')
        rows = db_utils.query_db(manager_params['database_name'], 'SELECT id FROM Scripts WHERE hash = "' + scriptHash + '";')
        if not rows:
            return None
        else:
            return rows[0]['id']

    def printScripts(self):
        for script in self.scripts:
            print ("Company | Categories {} {} {}".format(script.repeatingPatterns, ','.join(script.categories), hash(script)))
            for key, detectionPattern in script.detectionPatterns.iteritems():
                print("Pattern {} {} {} {}".format(key, ','.join(detectionPattern.patterns), detectionPattern.score, detectionPattern.totalScore))