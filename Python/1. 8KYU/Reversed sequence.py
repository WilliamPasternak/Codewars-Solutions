Reversed sequence

Build a function that returns an array of integers from n to 1 where n>0

def reverse_seq(n):
    ints = []
    for i in range(n,0,-1):
        ints.append(i)
    return ints


def reverseseq(n):
    return list(range(n, 0, -1))