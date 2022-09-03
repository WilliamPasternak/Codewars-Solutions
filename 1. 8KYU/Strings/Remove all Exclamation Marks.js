Remove all exclamation marks 
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

function remove (string) {
  return string.split('!').join('') + '!'
}


// Refactored to one-line
let removeExclamations = (string) => string.split('!').join('') + '!'