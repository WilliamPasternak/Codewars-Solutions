Validate code

Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.


function validateCode (code) {
  const codeAsString = String(code)
  const firstNum = codeAsString[0]
  return firstNum > 0 & firstNum <= 3 ? true : false
}

function validateCode (code) {return /^[123]/.test(code)}