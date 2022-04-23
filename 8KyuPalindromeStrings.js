/* 8 kyu
Palindrome Strings */
function isPalindrome(line) {
  let testPhrase = String(line)
  if(testPhrase === testPhrase.split('').reverse().join('')){
    return true
  }
  return false
  
  
  
  
}