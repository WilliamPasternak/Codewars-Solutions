Simple, remove the spaces from the string, then return the resultant string.

def no_space(x):
    noSpaces = ''
    for char in x:
        if char != ' ':
            noSpaces += char
    return noSpaces

def no_space(x):
    return "".join(x.split())

def no_space(x):
    return x.replace(' ' ,'')