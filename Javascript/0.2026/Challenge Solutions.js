----------------------------------------------------------------------
DATE: MM/DD/YY

CHALLENGE NAME:

DESCRIPTION:

PARAMETERS AND RETURN:
- Parameters: [Input name and type]
- Return: [Expected output and type]

EXAMPLES:
- [Input] → [Expected output]
- [Input] → [Expected output]
- [Input] → [Expected output]

SOLUTION:

REFACTOR:

NOTES:
- [Key concept]
- [Alternative approach or edge case to remember]
----------------------------------------------------------------------
DATE: 10/28/26

CHALLENGE NAME:Sum of positive

DESCRIPTION: You get an array of numbers, return the sum of all of the positives ones.


PARAMETERS AND RETURN:
- Parameters:  Array (arr)
- Return: Integer (currTotal)

EXAMPLES:
- positiveSum([1, 2, 3, 4, 5]), 15  // All positive
- positiveSum([1, -2, 3, -4, 5]), 9 // Mixed positive and negative
- positiveSum([]), 0 // Empty array
- positiveSum([-1, -2, -3]), 0 // No positive numbers
- positiveSum([0, 0, 0]), 0 // Zeros only
- positiveSum([5]), 5 //Single positive number

SOLUTION:

function positiveSum(arr) {
  let currTotal = 0

  for (let i = 0; i < arr.length; i++){
    const currNum = arr[i]

    if (currNum > 0) {
      currTotal += currNum
    }
  }
  return currTotal
}


REFACTOR:
 - Can use Filter & Reduce
----------------------------------------------------------------------
DATE: 10/27/26 

CHALLENGE NAME: Who likes it?

DESCRIPTION: 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. 
It must return the display text as shown in the below examples:


PARAMETERS AND RETURN:
- Parameters: Array (names)
- Return: String (likesStatement)

EXAMPLES:
- likes([]), "no one likes this"
- likes(["Peter"]), "Peter likes this"
- likes(["Jacob", "Alex"]), "Jacob and Alex like this"
- likes(["Max", "John", "Mark"]), "Max, John and Mark like this"
- likes(["Alex", "Jacob", "Mark", "Max"]), "Alex, Jacob and 2 others like this"

ORIGINAL SOLUTION:

// this function takes an array (names) returns a 'likesStatement' representing who if anyonelikes this post.
function likes(names){
  // Find length of array 
  const arrLength = names.length

  // Establish likesStatement 
  let likesStatement = ""

  // Length determines which template will be used
  if (arrLength === 0){
    likesStatement = "no one likes this"
  } 
  else if(arrLength === 1){
    likesStatement = `${names[0]} likes this`
  }
  else if (arrLength === 2){
    likesStatement = `${names[0]} and ${names[1]} like this`
  }
  else if (arrLength === 3){
    likesStatement = `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else {
    likesStatement = `${names[0]}, ${names[1]} and ${arrLength - 2} others like this`
  }

  return likesStatement
}

REFACTOR:
 if (arrLength === 0) {
    return "no one likes this"
  } else if (arrLength === 1) {
    return `${names[0]} likes this`
  } else if (arrLength === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (arrLength === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${arrLength - 2} others like this`
  }
}

----------------------------------------------------------------------
DATE: 10/26/26

CHALLENGE NAME:
Vowel Count

DESCRIPTION:
- Return the number (count) of vowels in the given string.
- We will consider a, e, i, o, u as vowels for this challenge (but not y).
- The input string will only consist of lower case letters and/or spaces.

PARAMETERS AND RETURN:
- Parameters: string (str)
- Return: number (count)

EXAMPLES:
- getCount('a'), 1
- getCount('b'), 0
- getCount(' '), 0
- getCount('y'), 0
- getCount('a e i o u'), 5

SOLUTION:

function getCount(str){
// create variable to hold current count of vowels.
  let count = 0
// establish valid vowels.
  const vowels = new Set (['a','e','i','o','u'])

// iterate over input string
  for(let i = 0; i < str.length; i++){
    const currChar = str[i]
    // check if character is a vowel
    if(vowels.has(currChar)){
      count++
    }
   
  }
  return count
}


NOTES:
Alternative approach: 
- I could have used an Object instead of a Set, 
- I'd check for vowel with if(Object.hasOwn(vowels, curChar)) {count ++}

Edge cases: 
The challenge specifies lowercase input, so uppercase handling isn't required but could be.

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