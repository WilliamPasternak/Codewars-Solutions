Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle,


def find_needle(haystack):
    position = str(haystack.index('needle'))
    return 'found the needle at position ' + position