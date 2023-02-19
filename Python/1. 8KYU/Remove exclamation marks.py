Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

def remove_exclamation_marks(s):
    phrase = ''
    for i in s:
        if i != '!':
            phrase += i
    return phrase