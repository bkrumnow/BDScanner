from automation import TaskManager, CommandSequence
from six.moves import range
from detection import FileCache
import csv

# The list of sites that we wish to crawl
NUM_BROWSERS = 6

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

fileReader = csv.reader(open('detection/alexa/top-1m.csv'), delimiter=',')
#fileReader = csv.reader(open('detection/validation/getastra.csv'), delimiter=',')

# Visits the sites with all browsers simultaneously

urls = []

for (index, url) in fileReader:
	urls.append(url);
del fileReader

fileCache = FileCache.FileCache()

for i in range(0, len(urls), 20):
    url = urls[i]
    print ("i %s %s" % (i, url))

    command_sequence = CommandSequence.CommandSequence('http://' + url)

    # Start by visiting the page
    command_sequence.get(sleep=15, timeout=120)
    command_sequence.detect_webbot_detection(timeout=360, fileCache)

    #command_sequence.save_screenshot('EndPrint', 1000)
    # index='**' synchronizes visits between the three browsers
    manager.execute_command_sequence(command_sequence, index=None)
    del command_sequence

    if i >= 40000:
        break;

# Shuts down the browsers and waits for the data to finish logging
manager.close()
