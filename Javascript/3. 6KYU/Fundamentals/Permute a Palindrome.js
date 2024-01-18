Permute a Palindrome
Write a function that will check whether ANY permutation of the characters of the input string is a palindrome.

/**
 * Checks whether any permutation of the characters of the input string is a palindrome.
 *
 * @param {string} input - The input string to check for palindrome permutations.
 * @returns {boolean} True if any permutation is a palindrome, false otherwise.
 */

function permuteAPalindrome (input) { 
  // Single char, or empty string
  if(input.length === 1 || !input) return true
  // Count occurances of each char
  const charCount = {}
  for(let char of input){
    charCount[char] = (charCount[char] || 0) + 1
  }
  
  let numOddChars = 0
  for(let char in charCount){
    // Check if character count is odd, if so increment
    const countIsOddNumber = charCount[char] % 2 !== 0
    if(countIsOddNumber) numOddChars++
     // If more than 1 character has an odd count, it can not be a palindrome.
    if(numOddChars > 1) return false
  }
  return true
}