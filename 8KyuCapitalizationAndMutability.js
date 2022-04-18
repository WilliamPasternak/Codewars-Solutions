/*
8 kyu
Capitalization and Mutability
*/

function capitalizeWord(word) {
  let arr = word.split('')
  arr[0] = arr[0].toUpperCase()
  let newWord = arr.join('')
  return newWord;
}