Century From Year

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.


def century(year):
    if str(year).endswith('00'):
        return int(str(year)[0:2])
    else:
        return (year // 100) + 1
 

def century(year):
    if year % 100 == 0:
        century = year / 100
    else: 
        century = year // 100 +1
    return century