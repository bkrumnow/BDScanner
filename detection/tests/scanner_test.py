#!/usr/bin/env python2.7
"""Testing the scanner 

Author: Benjamin Krumnow
"""

import unittest
import resources.scanner_test

PATH = "./resources"
COMMENTED_FILE = "commented.js"

class ScannerTest(unittest.TestCase):

    #def setUp(self):

    #def tearDown(self):
        
    def test_(self):
        """ testing the preprocessing function for removed comments and deobfuscation
        """
        with open(path(PATH, COMMENTED_FILE), "r") as f:
            script = f.read()
            