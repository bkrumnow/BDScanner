import mmap

def checkPattern(data, pattern, scriptPath):
    try:
        if pattern in data:
            return 1
        else:
            return 0
    except:
        print("Unknown data format %s" % (scriptPath))
        return -1