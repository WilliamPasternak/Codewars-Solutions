Calculate average

Write a function which calculates the average of the numbers in a given list.

def find_average(numbers):
    sum = 0
    for num in numbers:
        sum += num
    return sum / len(numbers)

 def find_average(numbers):
    total = sum(numbers)
    return total / len(numbers) if numbers else 0