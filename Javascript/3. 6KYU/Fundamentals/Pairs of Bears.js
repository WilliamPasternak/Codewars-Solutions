/**
 * Challenge: Pairs of Bears
 * Source: https://www.codewars.com/kata/57d165ad95497ea150000020/train/javascript
 * Description: You must check within a string (s) to find all of the mating pairs, returning a list/array of the string containing 
 * valid mating pairs and a boolean indicating whether the total number of bears is greater than or equal to targetNumber.
 * 
 */

/**
 * Finds pairs of "B8" or "8B" in the given string and returns the concatenated pairs and whether the count of pairs meets the target number.
 * @param {number} targetNumber - The target number of pairs to find.
 * @param {string} str - The input string to search for pairs.
 * @returns {Array} An array containing the concatenated pairs and a boolean indicating if the count of pairs meets the target number.
 */

function bears(targetNumber, str){
  // create array to hold pairs 
  const mates = []
  // iterate over str (w/ 2 pointers)
  let [left,right] = [0, 1]
  while (right <= str.length) {
    let [leftChar, rightChar] = [str[left], str[right]]
    if (leftChar === 'B' && rightChar === '8' || leftChar === '8' && rightChar === 'B' ) {
      let pair = leftChar + rightChar
       // push left char and right char
      mates.push(pair)
      left = right + 1
      right = left + 1
    }
    else {
      left++
      right++
    }
  }
  return [mates.join(''), mates.length >= targetNumber]  
}