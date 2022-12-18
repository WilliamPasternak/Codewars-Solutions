Fix string case
function solve(s){
  // Create counters for Upper & Lowercase Letters
  let numUpper = 0
  let numLower = 0
  // ASCII Range for Capital A - Capital Z
  let A = 65
  let Z = 90
  
  // Check casing of each character
  for(let i = 0; i < s.length; i++){
    let currentLetter = s.charCodeAt(i)
    if(currentLetter >= A && currentLetter <= Z ){
      numUpper++
    }
    else{
      numLower++
    }
  }
  // Compare frequency of Uppercase vs Lowercase letters, return s in casing of greatest
  return numUpper > numLower ? s.toUpperCase() : s.toLowerCase()
  
}