Valid Parentheses

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parenStr) {
  const seen = []
  
  for(let char of parenStr){
    if (char === '(') seen.push(char)
    else {
      let removed = seen.pop()
      if(removed === undefined) return false
    }
  }
  return seen.length === 0 
}