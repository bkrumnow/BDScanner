class Scanner:
    def scan(self, driver):
        # print("hmmzz %s" % (str(command[2])))
        #Scan Main page Source
        counter = 0
        for element in driver.find_elements_by_tag_name('script'):
           # print("Script %s" % (element.get_attribute('outerHTML')))

            #Scan internal and external script contents
            scriptSrc = element.get_attribute('src')

            if scriptSrc:
                self.downloadFile(scriptSrc, counter)
            else:
                outerHTML = element.get_attribute('src')
            counter = counter + 1

    def downloadFile(self, src, counter):
        print("download %s %s" % (src, counter))
