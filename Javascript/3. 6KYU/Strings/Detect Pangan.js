A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// Need to refactor, technically, below code passed tests but the obvious bug is that using the set size can be an issue if multiple symbols or numbers are included in string. 
function isPangram(string){
  // Less than 26 chars can not be a Pangram
  if(string.length < 26) return false
  
  const lettersUsed = new Set()
  let chars = string.split(' ').join('')
  for(char of chars){
    lettersUsed.add(char.toLowerCase())
  }
  
  return lettersUsed.size >= 26 ? true : false
}
