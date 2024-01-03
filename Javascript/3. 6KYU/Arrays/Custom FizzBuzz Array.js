/**
 * Challenge: Custom FizzBuzz Array (6KYU)
 * Source: https://www.codewars.com/kata/5355a811a93a501adf000ab7/javascript
 * Description: Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.
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
  
  // Iterate through the range of numbers.
  for (let i = 1; i <= range; i++) {
    // Alias for currentNumber for clarity.
    const currentNumber = i;

    // Determine replacement for the current number based on divisibility.
    if (currentNumber % (numOne * numTwo) === 0) {
      // Divisible by both numOne and numTwo.
      resultsArray.push(`${stringOne}${stringTwo}`);
    } else if (currentNumber % numOne === 0) {
      // Divisible by numOne only.
      resultsArray.push(stringOne);
    } else if (currentNumber % numTwo === 0) {
      // Divisible by numTwo only.
      resultsArray.push(stringTwo);
    } else {
      // Not divisible by numOne or numTwo.
      resultsArray.push(currentNumber);
    }
  }

// Tests:
console.log(fizzBuzzCustom()[15],16)                        
console.log(fizzBuzzCustom()[44], 'FizzBuzz')
console.log(fizzBuzzCustom('Hey', 'There')[25],26)        
console.log(fizzBuzzCustom('Hey', 'There')[11],'Hey')
console.log(fizzBuzzCustom("What's ", "up?", 3, 7)[80],"What's")






