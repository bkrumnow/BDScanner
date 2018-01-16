import mmap

def checkPattern(data, pattern):
    if pattern in data:
        return True
    else:
        return False
