Beginner Series #2 Clock

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.


def past(h, m, s):
    ms = 1000
    return ( (h * 60 * 60) + (m * 60) + (s) ) * ms