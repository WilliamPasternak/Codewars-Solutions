ASCII Total

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

def uni_total(s):
    sum = 0
    for char in s:
        sum += ord(char)
    return sum