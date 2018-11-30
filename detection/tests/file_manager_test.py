#!/usr/bin/env python2.7
"""Testing the scanner 

Author: Benjamin Krumnow
"""

import unittest
import detection.FileManager as manager

class FileManagerTest(unittest.TestCase):

    #def setUp(self):

    #def tearDown(self):
    
    def test_remove_comments(self):
        """ Testing...
        """
        testing = "asdasdasd"
        self.assertEqual(testing, manager.remove_comments(testing))
        
    def test_convert_hexadecimal(self):
        """ Testing...
        """
        testing = "asdasdasd"
        self.assertEqual(testing, manager.convert_hexadecimal(testing))
        
if __name__ == '__main__':
    unittest.main()