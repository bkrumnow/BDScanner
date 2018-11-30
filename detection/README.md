#Introduction#

The web bot detection command makes it possible to detect web bot detection code inclusions. For a given
URL the command extracts the script inclusions (inline and external scirpt) from the home page and examines
the content for properties that can identify a web bot.
A web bot is an automated agent that makes use of specific software (e.g. Selenium or PhantomJS) to extract the contents of a web page.

The web bot detection command detect a bot detection inclusion based upon a heuritics of five categories:

1 Known Web bot detection patterns
1 Web bot detection properties (Web bot specific Global DOM Object properties)
2 Web bot detection values (Web bot specific Global DOM Object values)
3 Common DOM properties that can identify a web bot
4 Web bot detection literal (Common observed literals used to identify a web bot)


# Quick Start # 
First install OpenWPM as in the introdution
Run the scanner extension by exectuing this command:

	$ python scan.py


#Testing#

Run a single test by executing from the parent directory of the "detection" folder:

    $ python -m detection.tests.file_manager_test
