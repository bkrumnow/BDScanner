from detection import Scanner
from detection.db import DB
import os
db = DB.DB()

def analyseFile(src):
        print ('\n###########################################################################################')
        scanner = Scanner.Scanner(db)
        scanner.downloadFile(src)
        db.scripts = scanner.scripts
        db.printScripts()

#analyseFile('file:detection/examples/inlineScript9.js')


for subdir, dirs, files in os.walk('detection/examples'):
    for file in files:
        filepath = 'file:' + subdir + os.sep + file
        analyseFile(filepath)