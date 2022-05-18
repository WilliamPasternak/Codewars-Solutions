/*Add Length
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
*P: String of at least 1 word. Always seperated by space.
*R: Array with each original word and length as integer as a string
*E: ("apple band") => ('apple 5','band 4')
*/

// Refactored Code
function addLength(str){
  return str.split(' ').map(word => `${word} ${word.length}`)
}



function addLength(str) {
  let wordsAndLength = []
  // Split string into each individual word 
  let justWords = str.split(' ')
  // Iterate over list of words, push the word and its length to Array
  for(let i = 0 ; i < justWords.length; i++){
    wordsAndLength.push(`${justWords[i]} ${justWords[i].length}`)
  }
  return wordsAndLength
}

