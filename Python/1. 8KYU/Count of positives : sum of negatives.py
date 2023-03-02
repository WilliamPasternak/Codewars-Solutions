Count of positives / sum of negatives

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

def count_positives_sum_negatives(arr):
    if len(arr) == 0: return []
    countOfPositives = 0
    sumOfNegatives = 0
    for num in arr:
        if num > 0:
            countOfPositives +=1
        elif num < 0:
            sumOfNegatives += num
    return [countOfPositives,sumOfNegatives]