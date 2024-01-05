/**
 * Challenge: Find the Unique String
 * Source: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript
 * Description: There is an array of strings. All strings contains similar letters except one. Try to find it!
 */

 /*
 * Finds the unique string in an array that does not contain the same characters as the other strings.
 * @param {string[]} stringsArray - An array of strings to search for the unique string.
 * @returns {string} That does not contain the same characters as the other strings
 */

function findUniq(stringsArray) {
  // Create an array of the unique chars in each string.
  let uniqueCharsArray = stringsArray.map((string) => {
    let sortedString = string.toLowerCase().split("").sort().join("")
    // Remove duplicates characters using a Set and join the characters back into a string
    return [...new Set(sortedString)].join('')
  })
  // Find the index of the unique string in the array
  let uniqueString = uniqueCharsArray.find((char) =>
    uniqueCharsArray.lastIndexOf(char) === uniqueCharsArray.indexOf(char)
  );
  let uniqueIndex = uniqueCharsArray.indexOf(uniqueString)

  // Return the string 
  return stringsArray[uniqueIndex]
}

// Tests:
console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]), 'BbBb')
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]), 'foo')
console.log(findUniq([ 'silvia', 'vasili', 'victor' ]), 'victor')
console.log(findUniq([ '    ', 'a', ' ' ]), 'a')