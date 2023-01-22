def fizzBuzz(num):
  for number in range(1,num + 1):
    if number % 15 == 0:
      print('fizzBuzz')
    elif number % 3 == 0:
      print('Fizz')
    elif number % 5 == 0:
      print('Buzz')
    else:
      print(number)

fizzBuzz(100)