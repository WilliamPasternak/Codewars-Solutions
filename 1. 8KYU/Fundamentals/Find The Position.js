//Find the position!
function position(letter){
  // Get the char code of the provided letter. Lowercase ASCII Alphabet are numbers 97 - 122
  // Alphabet position is 1-26, Subtract 
  return  `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}