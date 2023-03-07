Reverse every other word in the string

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str){
  // Add each words to an array
  let words = str.trim().split(' ')
  // If word is at an odd index, reverse it.
  for(let i = 1; i < words.length; i++){
    if(i % 2 !== 0){
      words[i] = words[i].split('').reverse().join('')
    }
  }
  return words.join(' ')
}