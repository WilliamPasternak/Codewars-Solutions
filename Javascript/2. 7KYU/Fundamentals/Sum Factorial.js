Sum Factorial

In this kata you will be given a list of values that you must first find the factorial, and then return their sum.

For example if you are passed the list [4, 6] the equivalent mathematical expression would be 4! + 6! which would equal 744.

Good Luck!

Note: Assume that all values in the list are positive integer values > 0 and each value in the list is unique.


function sumFactorial(arr){
  let factorialArr = arr.map((num) => factorial(num))
  return factorialArr.reduce((a,b) => a + b)
}

function factorial(num){
  if(num === 1) return 1
  return num * factorial(num - 1)
}