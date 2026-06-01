
6/1
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