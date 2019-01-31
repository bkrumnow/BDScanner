#!/usr/bin/env python2.7
"""Testing the file manager

"""

import unittest
import os.path as path
from .. import FileManager as FileManager

PATH = path.dirname(path.realpath(__file__))+"/resources"
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
            
            