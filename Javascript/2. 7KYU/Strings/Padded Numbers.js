Substituting Variables Into Strings: Padded Numbers
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Using slice method
// Add 'value' to a string of 5 zeros. Return the last 5 digits of string.
function solution(value){
  return `Value is ${("00000" + value).slice(-5)}`;
}

// Using padStart method
// Add zeros to the front of 'value' string until the length is 5.
const solution = value => `Value is ${String(value).padStart(5, '0')}`;