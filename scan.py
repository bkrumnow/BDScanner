from automation import TaskManager, CommandSequence
from six.moves import range
import csv
import os

# Number of parallel browsers
NUM_BROWSERS = 8

# Loads the manager preference
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
manager = TaskManager.TaskManager(manager_params, browser_params)

#fileReader = csv.reader(open('detection/alexa/top-1m.csv'), delimiter=',')
fileReader = csv.reader(open('detection/validation/test.csv'), delimiter=',')
#        fileReader = csv.reader(open(filepath), delimiter=',')

urls = []
for (index, url) in fileReader:
    urls.append(url);
del fileReader

#for i in range(949244, len(urls),4):
for i in range(1, len(urls),1):
    url = urls[i]
    print ("Command creation %s %s" % (i, url))

    #second parameter will clear the profile (reset)
    command_sequence = CommandSequence.CommandSequence('http://' + url, True)

    # Start by visiting the page
    command_sequence.get(sleep=15, timeout=120)

    #command_sequence.save_screenshot('EndPrint', 1000)
    command_sequence.detect_webbot_detection(timeout=360)
    # index='**' synchronizes visits between the three browsers
    manager.execute_command_sequence(command_sequence, index=None)
    del command_sequence

# Shuts down the browsers and waits for the data to finish logging
manager.close()
