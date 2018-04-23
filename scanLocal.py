import datetime
from detection import Scanner
from detection.db import DB
import os
from detection import FileManager, FileCache

start = datetime.datetime.now()
db = DB.DB()

def analyseFile(src):
        print ('\n######################################## %s' % src)
        scanner = Scanner.Scanner(db)
        FileManager.downloadFile(src, scanner)
        db.scripts = scanner.scripts
        db.printScripts()

#analyseFile('file:detection/examples/inlineScript9.js')


for subdir, dirs, files in os.walk('detection/examples'):
    for file in files:
#        if file == 'async.js':
            filepath = 'file:' + subdir + os.sep + file
            analyseFile(filepath)

end = datetime.datetime.now()

delta = end - start
datetime.timedelta(0, 8, 562000)
delta2 = divmod(delta.days * 86400 + delta.seconds, 60)
print ("Min. Sec. %s %s" % (delta2[0], delta2[1]))