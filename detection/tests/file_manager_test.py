#!/usr/bin/env python2.7
"""Testing the file manager

"""

import unittest
from .. import FileManager as FileManager

PATH = "./resources"
COMMENTED_FILE = "commented.js"

class FileManagerTest(unittest.TestCase):

    #def setUp(self):

    #def tearDown(self):
        
    def test_pre_process(self):
        """ testing the preprocessing function for removed comments and deobfuscation
        """
        with open(path(PATH, COMMENTED_FILE), "r") as f:
            script = f.read()
            FileManager.pre_process(f)
            
            