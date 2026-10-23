----------------------------------------------------------------------
Template: 
DATE: MM/DD/YY

CHALLENGE NAME:
[Name of the challenge]

DESCRIPTION:
[Paste the full challenge instructions here.]

PARAMETERS AND RETURN:
- Parameters: [Input name and type]
- Return: [Expected output and type]

EXAMPLES:
- [Input] → [Expected output]
- [Input] → [Expected output]
- [Input] → [Expected output]

SOLUTION:

NOTES:
- [Key concept learned]
- [Alternative approach or edge case to remember]

----------------------------------------------------------------------
DATE: 10/23/26

CHALLENGE NAME: Even or Odd

DESCRIPTION:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

PARAMETERS AND RETURN:
- Parameters: num -> Integer
- Return: "Even or Odd" -> String

EXAMPLES:
- [8] → "Even"
- [1] → "Odd"
- [0] → "Even"
- [-1] → "Odd"
- [-2] → "Even"


SOLUTION:
function returnsParity (num){
  const isEven = num % 2 === 0 
  return isEven ? "Even" : "Odd"
}

// Tests
    console.log(returnsParity(8),  "Even" , 8)
    console.log(returnsParity(1),  "Odd",   1)
    console.log(returnsParity(0),  "Even",  0)
    console.log(returnsParity(-1), "Odd",  -1)
    console.log(returnsParity(-2), "Even", -2)

NOTES:
-  Negative integers work without Math.abs() because negative even numbers still have a remainder of 0 when divided by 2. 
-  Zero is also even. The function can be simplified to return num % 2 === 0 ? "Even" : "Odd" without an intermediate variable.



6/4/2026
Vowel Count:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels (but not y).

The input string will only consist of lower case letters and/or spaces.

// Parameters and Return: str -> # of vowels in input.
// Examples: 'abc' -> 1, 'aeiouy' -> 5, 'b' -> 0, '  ' -> 0, 

function getCount(str) {
  // create variable to hold count of vowels
  let vowelCount = 0
  // iterate over each letter in str, increment count if current letter is vowel.
  for (let char of str){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
      vowelCount++
    }
  }
  return vowelCount
}





6/2/2026
Multiples of 3 or 5:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If a number is a multiple of both 3 and 5, only count it once.

// numeric value (number) -> sum of all multiples of 3 or 5 below at number.
function solution(number){
   // if negative numeric value -> 0
  if (number < 0) {
    return 0
  }
  // Create variable to hold sum
  let sum = 0
  
   // Check if each number is divisible by 3 or 5, if so add to sum.
  for (let i = 0; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}



6/1/2026
Even or Odd:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

  // number -> "Even" or "Odd"
  // 1 -> "Odd",  2 -> "Even", 0 - > "" , -1 -> "Odd", -2 -> "Even"

function evenOrOdd(number) {  
  let result = 'Even'
  // Check remainder if dividing by 2, 
  const remainder = number % 2
  if (remainder !== 0) {
    result = 'Odd'
  }
  
  return result
}

Refactored:

function evenOrOdd(number) {  
  return number % 2 === 0 ? "Even" : "Odd"
}