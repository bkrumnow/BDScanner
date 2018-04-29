import os
import random
import sqlite3
from detection import DetectionPattern, Globals
from automation.utilities import db_utils

class DB:

    def __init__(self):
        self.scripts = []
        self.honeypotElements = []

    def insertScript(self, sock, id, visit_id, identifier, URL, score, company, obfuscated, duplicate, hash):
        try:
            query = ("INSERT INTO Scripts (id, visit_id, name, URL, level, score, company, obfuscated, duplicate, hash) VALUES (?,?,?,?,?,?,?,?,?,?)",
            (id, visit_id, identifier, URL, 0, score, company, obfuscated, duplicate, hash))
            sock.send(query)
        except:
            print("Error inserting script record %s %s" % (identifier, id))

    def insertDetection(self, sock, scriptId, topic, pattern, company, score):
        try:
            query = ("INSERT INTO DetectionPatterns (script_id, topic, pattern, value, company, score) VALUES (?,?,?,?,?,?)",
            (scriptId, topic, pattern, '', company, score))
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

    def updateSiteVisit(self, sock, score, visitId):
        try:
            query = ("UPDATE site_visits SET score=? WHERE visit_id=?",
            (score, visitId))
            sock.send(query)
        except:
            print("Error updating site_visit record %s %s %s" % (score, visitId, sys.exc_info()[0]))


    def persistResults(self, sock, visit_id, manager_params):
        print('PERSIST SCRIPTS %s' % len(self.scripts))
        highestScore =0
        #print('self %s' % self)
        for script in self.scripts:

            if script.score > highestScore:
                highestScore = script.score

            scriptHash = hash(script)
            existsInCache = self.checkCache(sock, scriptHash, manager_params)

            duplicate = ''
            company = ''

            scriptId = str(visit_id) + '_' + script.identifier + '_' + str(random.randint(1,101)*5)
            if existsInCache:
                duplicate = existsInCache
                scriptHash = -1
            else:
                self.writeFile(script.identifier, script.data, str(visit_id) + '/')
                company = ','.join(script.companyPatterns)
                for key, detectionPattern in script.detectionPatterns.iteritems():
                    self.insertDetection(sock, scriptId, key, ','.join(detectionPattern.patterns), company, detectionPattern.score)

            self.insertScript(sock, scriptId, visit_id, script.identifier, script.URL, script.score, company, script.obfuscated, duplicate, scriptHash)

        print('PERSIST HONEYPOTS %s' % len(self.honeypotElements))
        for honeypotElement in self.honeypotElements:
            print honeypotElement
            self.insertHoneypotElement(sock, visit_id, honeypotElement[0], honeypotElement[1], ','.join(honeypotElement[2]), ','.join(honeypotElement[3]), 12)

        self.updateSiteVisit(sock, highestScore, visit_id)

    def writeFile(self, name, data, prefix):
        path = '/home/osboxes/OpenWPM/detection/files/' +prefix
        try:
            os.makedirs(path)
        except:
            pass

        try:
            with open(path + name, 'w') as file:
                file.write(data.encode('utf-8'))
        except:
            print("Could not write file %s" % name)


    def checkCache(self, sock, scriptHash, manager_params):
        rows = db_utils.query_db(manager_params['database_name'], "SELECT id FROM Scripts WHERE hash = " + str(scriptHash) + ";")
        if not rows:
            return None
        else:
            return rows[0]['id']

    def printScripts(self):
        for script in self.scripts:
            print ("Company %s" % script.companyPatterns)
#            for key, detectionPattern in script.detectionPatterns.iteritems():
#                print("Pattern %s %s %s" % (key, ','.join(detectionPattern.patterns), detectionPattern.score))