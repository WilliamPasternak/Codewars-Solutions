# Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

def hotpo(n):
    count = 0
    while n != 1:
        if n % 2 == 0:
            n /= 2
        elif n % 2 != 0:
            n = 3 * n + 1
        count += 1
    return count