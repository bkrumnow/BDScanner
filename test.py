import urllib2, httplib

site = 'https://www.drivingresultsthroughculture.com/wp-content/plugins/bb-ultimate-addon/modules/blog-posts/js/jquery-masonary.js?ver=4.9.4'

hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
       'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
       'Accept-Encoding': 'none',
       'Accept-Language': 'en-US,en;q=0.8',
       'Connection': 'keep-alive'}
req = urllib2.Request(site, headers=hdr)
response = urllib2.urlopen(req);

print('wicked %s' % response)
