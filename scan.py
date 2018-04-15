from __future__ import absolute_import
from automation import TaskManager, CommandSequence
from six.moves import range
import csv
import sys


# The list of sites that we wish to crawl
NUM_BROWSERS = 4

        #LOCAL FILES
from detection import Scanner
from detection.db import DB
#src = 'file:detection/zwxsutztwbeffxbyzcquv.js'
        #src = 'file:detection/unknownhex.js'
#        src = 'https://dev.visualwebsiteoptimizer.com/2.0/va-33a5ce6d810338ed1c4d5ec7d320b624.js'
#        self.downloadFile(src)
#src = 'file:detection/async.js'
#src = 'file:detection/dstl-oprh.js'
#src = 'file:detection/player.js'
#
#src = 'file:detection/whitehat/b6be0a52-6193-'
#src = 'file:detection/2026481316.js'
#db = DB.DB()
#scanner = Scanner.Scanner(db)
#scanner.downloadFile(src)
#db.scripts = scanner.scripts
#db.printScripts()
#sys.exit('tempquitje')

# Loads the manager preference and 3 copies of the default browser dictionaries
manager_params, browser_params = TaskManager.load_default_params(NUM_BROWSERS)

# Update browser configuration (use this for per-browser settings)
for i in range(NUM_BROWSERS):
    # Record HTTP Requests and Responses
    browser_params[i]['http_instrument'] = False
    # Enable flash for all three browsers
    browser_params[i]['disable_flash'] = False
    browser_params[i]['headless'] = True


# Update TaskManager configuration (use this for crawl-wide settings)
manager_params['data_directory'] = '~/OpenWPM/data'
manager_params['log_directory'] = '~/OpenWPM/data'

# Instantiates the measurement platform
# Commands time out by default after 60 seconds
manager = TaskManager.TaskManager(manager_params, browser_params)

#fileReader = csv.reader(open('detection/alexa/top-1m.csv'), delimiter=',')
fileReader = csv.reader(open('detection/validation/getastra.csv'), delimiter=',')

# Visits the sites with all browsers simultaneously
for (index, url) in fileReader:
#    if number == '2':
#       break

    command_sequence = CommandSequence.CommandSequence('http://' + url)

    # Start by visiting the page
    command_sequence.get(sleep=15, timeout=120)
    command_sequence.detect_webbot_detection(timeout=360)

    #command_sequence.save_screenshot('EndPrint', 1000)
    # index='**' synchronizes visits between the three browsers
    manager.execute_command_sequence(command_sequence, index=None)

# Shuts down the browsers and waits for the data to finish logging
manager.close()
