/* 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/

// Refactored: 
function squareDigits(num){
  let array = num.toString().split('').map( x => x ** 2 )
  return parseInt(array.join(''));
  /* Convert number to string so we can split and use array methods.
  Square each element, and put in an array
  Join the array into a string, and convert to a number
  */
}

// Whiteboarded Solution
function squareDigits(num){
let stringNums = String(num)
let numArr = stringNums.split('')
let squaredArr = numArr.map( x => x**2)
return Number(squaredArr.join(''))
}

