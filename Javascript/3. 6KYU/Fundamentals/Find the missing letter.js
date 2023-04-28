Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.



function findMissingLetter(array){
  let charCodes = array.map((letter) => letter.charCodeAt(0))
  let missingCode
  
  for(let i = 0; i < charCodes.length - 1; i++){
    if(charCodes[i] + 1 !== charCodes[i+1]) {
      missingCode = charCodes[i] + 1
    }
  }
  
  return String.fromCharCode(missingCode)
  
}