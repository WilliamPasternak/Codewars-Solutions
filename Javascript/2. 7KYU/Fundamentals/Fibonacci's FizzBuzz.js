Fibonacci's FizzBuzz

The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.


var fibsFizzBuzz = function(n) {
  if(n === 1) return [1]
  
  const fibArray = [1,1]
  
  for(let i = 2; i < n ; i++){
    let nextFibNum = fibArray[i - 1] + fibArray[i - 2]
    fibArray.push(nextFibNum)
  }
  for(let i = 0; i < fibArray.length; i++){
    let currNum = fibArray[i]
    if(currNum % 15 === 0) fibArray[i] = 'FizzBuzz'
    else if(currNum % 5 === 0) fibArray[i]  = 'Buzz'
    else if(currNum % 3 === 0) fibArray[i]  = 'Fizz'
  }
  
  return fibArray
}

