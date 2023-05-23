Counting Duplicates

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
  let str = text.toLowerCase()
  let charCount = {}
  let duplicateCount = 0
  // Count Chars
  for(let i = 0; i < str.length; i++){
    let currentChar = str[i]
    charCount[currentChar] = charCount[currentChar] + 1 || 1
  }
  for(let char in charCount){
    if(charCount[char] > 1){
      duplicateCount++
    }
  }
  return duplicateCount
}