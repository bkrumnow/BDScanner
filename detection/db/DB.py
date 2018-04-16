import os
import random
from detection import DetectionPattern

class DB:

    def __init__(self):
        self.scripts = []

    def insertScript(self, sock, id, visit_id, identifier, URL, score, company, obfuscated):
        try:
            query = ("INSERT INTO Scripts (id, visit_id, name, URL, level, score, company, obfuscated) VALUES (?,?,?,?,?,?,?,?)",
            (id, visit_id, identifier, URL, 0, score, company, obfuscated))
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

            scriptId = str(visit_id) + '_' + script.identifier + '_' + str(random.randint(1,101)*5)
            company = ','.join(script.companyPatterns)
            self.insertScript(sock, scriptId, visit_id, script.identifier, script.URL, script.score, company, script.obfuscated)
            for key, detectionPattern in script.detectionPatterns.iteritems():
                self.insertDetection(sock, scriptId, key, ','.join(detectionPattern.patterns), company, detectionPattern.score)
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

    def printScripts(self):
        for script in self.scripts:
            print ("Company %s" % script.companyPatterns)
            for key, detectionPattern in script.detectionPatterns.iteritems():
                print("Pattern %s %s %s" % (key, ','.join(detectionPattern.patterns), detectionPattern.score))