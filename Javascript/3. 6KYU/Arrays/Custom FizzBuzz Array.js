/**
 * Customizable FizzBuzz implementation.
 * @param {string} stringOne - The string to replace multiples of numOne.
 * @param {string} stringTwo - The string to replace multiples of numTwo.
 * @param {number} numOne - The first divisor.
 * @param {number} numTwo - The second divisor.
 * @param {number} range - The range of numbers to consider.
 * @returns {Array} - An array containing the custom FizzBuzz results.
 */

function fizzBuzzCustom(stringOne = 'Fizz', stringTwo = 'Buzz', numOne = 3, numTwo = 5, range = 100) {
  // Check for valid input.
  if (numOne <= 0 || numTwo <= 0 || range <= 0) {
    throw new Error('Divisors and range must be greater than 0.');
  }
  
  // Create an array to hold results.
  const resultsArray = []
  
  for(let i = 1; i <= range; i++){
    const currentNumber = i
   // i divisible by numOne & numTwo.
   if (currentNumber % (numOne * numTwo) === 0){
     resultsArray.push(`${stringOne}${stringTwo}`)
   }
    // i divisible by numOne only.
    else if(currentNumber % numOne === 0){
      resultsArray.push(stringOne)
    }
    // i divisible by numTwo only.
    else if(currentNumber % numTwo === 0){
      resultsArray.push(stringTwo)
    }
    // i not divisible by numOne or numTwo
    else{
      resultsArray.push(currentNumber)
    }
  }
  return resultsArray
}

// Tests:
console.log(fizzBuzzCustom()[15],16)                        
console.log(fizzBuzzCustom()[44], 'FizzBuzz')
console.log(fizzBuzzCustom('Hey', 'There')[25],26)        
console.log(fizzBuzzCustom('Hey', 'There')[11],'Hey')
console.log(fizzBuzzCustom("What's ", "up?", 3, 7)[80],"What's")






