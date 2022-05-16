// 6KYU Create a Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//Parameters: 10 Integers between 0 & 9
// Return: String of properly formatted phone number (US)
// Example: [1,2,3,4,5,6,7,8,9,0] -> "(123) 456-7890"
// Pseudo: insert parenthesis, space and hyphen. Join array and return string.

function createPhoneNumber(numbers){
  numbers.splice(0,0,'(')
  numbers.splice(4,0,')',' ')
  numbers.splice(9,0,'-')
  return numbers.join('')
}

