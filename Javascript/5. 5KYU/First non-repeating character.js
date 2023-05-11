First non-repeating character

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'



function firstNonRepeatingLetter(str) {
  // Single letter strings 
  if(str.length === 1) return str
  
  // Count char frequencies
  const charCounts = {}
  
  // Count frequency of each character occurance (case insensitive)
  for(let char of str ){
    charCounts[char.toUpperCase()] = charCounts[char.toUpperCase()] + 1 || 1
  }
  
  // If no repeats
 const numUniqueChars = Object.keys(charCounts).length
 if(numUniqueChars === str.length) return ''
 
  // If repeats
  for(let i = 0; i < str.length; i++){
    let currChar = str[i]
    if(charCounts[currChar.toUpperCase()] === 1){
      return currChar
    }
  }
  return ""
}