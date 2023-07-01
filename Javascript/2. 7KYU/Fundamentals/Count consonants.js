Count consonants

Complete the function that takes a string of English-language text and returns the number of consonants in the string.


function consonantCount(str) {
  let lowerCaseStr = str.toLowerCase()
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toLowerCase().split('')
  const vowels = ['a','e','i','o','u']
  const consonants = alphabet.filter(letter => (!(vowels.includes(letter))))
  
  
  let count = 0
  for(let i = 0; i < lowerCaseStr.length; i++){
    if(consonants.includes(lowerCaseStr[i])){
      count++
    }
  }  
  return count
}