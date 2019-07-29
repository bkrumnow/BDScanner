""" Testing the file manager 

"""

import unittest
import os.path as path
from .. import FileManager as FileManager

PATH = path.dirname(path.realpath(__file__)) + "/resources"
COMMENTED_FILE = "commented.js"

class FileManagerTest(unittest.TestCase):

    #def setUp(self):

    #def tearDown(self):
        
    def test_preProcessScript(self):
        """ testing the preprocessing function for removed comments and deobfuscation
        """
        with open(path.join(PATH, COMMENTED_FILE), "r") as f:
            script = f.read()
            FileManager.preProcessScript(f)
            
    def test_extractFileName(self):
        # Filename should stay the same in this case and only characters after the final / are considered
        self.assertEqual(
            FileManager._extractFileName("https://example.com/analytics/comscore-streaming.js"),
            "comscore-streaming.js"
        )
            
        # ? and is prohibited
        self.assertEqual(
            FileManager._extractFileName("https://example.com/site/50550?ret=js&limit=1.js"),
            "50550-ret=js-limit=1.js"
        )
        
        # js is appended when it is missing
        self.assertEqual(
            FileManager._extractFileName("https://example.com/site/50550ret=jslimit=1"),
            "50550ret=jslimit=1.js"
        )
        
        # Not longer than 20 characters + charatercs file extension
        self.assertEqual(
            len(FileManager._extractFileName("https://example.com?id=GTM-P528B3&gtm_auth=tfAzqo1rYDLgYhmTnSjPqw&gtm_preview=env-130&gtm_cookies_win=x")),
            23
        )
        