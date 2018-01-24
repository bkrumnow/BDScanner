from __future__ import absolute_import
from automation import TaskManager, CommandSequence
from six.moves import range
from detection import Scanner

# The list of sites that we wish to crawl
NUM_BROWSERS = 1 #3
#sites = ['http://www.nu.nl/']
#sites = ['http://www.infojobs.net/']
#sites = ['http://soundcloud.com']
#sites = ['https://www.upwork.com']
#sites = ['https://www.twitch.tv/']
#sites = ['https://www.office.com/']
#sites = ['https://ok.ru/']
#sites = ['https://www.transavia.com/nl-NL/home/']
#sites = ['https://www.wellsfargo.com/']
#sites = ['https://www.eurowings.com/']
sites = ['https://www.iberia.com/']

        #LOCAL FILES
src = 'file:detection/utag.js'
        #src = 'file:detection/unknownhex.js'
#        src = 'https://dev.visualwebsiteoptimizer.com/2.0/va-33a5ce6d810338ed1c4d5ec7d320b624.js'
#        self.downloadFile(src)
#        src = 'file:detection/async.js'
#scanner = Scanner.Scanner()
#scanner.downloadFile(src)




#sites = ['http://www.example.com',
#         'http://www.princeton.edu',
#         'http://citp.princeton.edu/']

# Loads the manager preference and 3 copies of the default browser dictionaries
manager_params, browser_params = TaskManager.load_default_params(NUM_BROWSERS)

# Update browser configuration (use this for per-browser settings)
for i in range(NUM_BROWSERS):
    # Record HTTP Requests and Responses
    browser_params[i]['http_instrument'] = True
    # Enable flash for all three browsers
    browser_params[i]['disable_flash'] = False
browser_params[0]['headless'] = False  # Launch only browser 0 headless

# Update TaskManager configuration (use this for crawl-wide settings)
manager_params['data_directory'] = '~/OpenWPM/data'
manager_params['log_directory'] = '~/OpenWPM/data'

# Instantiates the measurement platform
# Commands time out by default after 60 seconds
manager = TaskManager.TaskManager(manager_params, browser_params)

# Visits the sites with all browsers simultaneously
for site in sites:

    command_sequence = CommandSequence.CommandSequence(site)

    # Start by visiting the page
    command_sequence.get(sleep=15, timeout=120)


    command_sequence.detect_webbot_detection(timeout=360)

    #command_sequence.save_screenshot('EndPrint', 1000)
    # index='**' synchronizes visits between the three browsers
    manager.execute_command_sequence(command_sequence, index='**')

# Shuts down the browsers and waits for the data to finish logging
manager.close()
