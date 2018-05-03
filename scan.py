from automation import TaskManager, CommandSequence
from six.moves import range
import csv
import os

# The list of sites that we wish to crawl
NUM_BROWSERS = 7

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

#for subdir, dirs, files in os.walk('detection/validation'):
#    for file in files:
#        if file == 'polyfills.337d0db18c':
#        filepath = subdir + os.sep + file


fileReader = csv.reader(open('detection/alexa/top-1m.csv'), delimiter=',')
#        fileReader = csv.reader(open('detection/validation/test.csv'), delimiter=',')
#        fileReader = csv.reader(open(filepath), delimiter=',')

# Visits the sites with all browsers simultaneously

urls = []

for (index, url) in fileReader:
    urls.append(url);
del fileReader

maxRecords = 5000
startRange = 180003
threshold = (maxRecords * 20) + startRange  # (100000) + startrange
for i in range(startRange, len(urls), 20):
#        for i in range(0, len(urls)):
    url = urls[i]
    print ("Command creation %s %s" % (i, url))

    command_sequence = CommandSequence.CommandSequence('http://' + url)

    # Start by visiting the page
    command_sequence.get(sleep=15, timeout=120)
    command_sequence.detect_webbot_detection(timeout=360)


    #command_sequence.save_screenshot('EndPrint', 1000)
    # index='**' synchronizes visits between the three browsers
    manager.execute_command_sequence(command_sequence, index=None)
    del command_sequence

    if i >= threshold:
        print "Threshold reached",i
        break;

print "Exit scanner"
# Shuts down the browsers and waits for the data to finish logging
manager.close()
