/**
 * Challenge: Anagram difference
 * Source: https://www.codewars.com/kata/5b1b27c8f60e99a467000041/train/javascript
 * Description: Given two words, how many letters do you have to remove from them to make them anagrams?
 * 
 *
 * @param {Array} arr - The input array to be checked.
 * @returns {boolean} Returns true if all elements are integers, false otherwise.
 */


/**
 * Calculates the number of letters to remove from two words to make them anagrams.
 * @param {string} w1 The first word.
 * @param {string} w2 The second word.
 * @returns {number} The number of letters to remove.
 */
function anagramDifference(w1, w2) {
  // keep count of differences 
  let differences = 0
  
  // Create objects to hold word counts.
  const word1CharCount = {}
  const word2CharCount = {}
  
  // count chars in first word
  for (let char of w1) {
    word1CharCount[char] = (word1CharCount[char] || 0) + 1
  }
  
  // count chars in second word
  for (let char of w2) {
    word2CharCount[char] = (word2CharCount[char] || 0) + 1
  }
 
  // iterate through the characters in both words
  for (let char in word1CharCount) {
    const charCountInWord1 = word1CharCount[char] || 0;
    const charCountInWord2 = word2CharCount[char] || 0;
    differences += Math.abs(charCountInWord1 - charCountInWord2);
  }

  // iterate through the characters in the second word (if not in first)
  for (let char in word2CharCount) {
    if (!word1CharCount[char]) {
      // This character is only present in the second word
      differences += word2CharCount[char];
    }
  }

  return differences;
}





