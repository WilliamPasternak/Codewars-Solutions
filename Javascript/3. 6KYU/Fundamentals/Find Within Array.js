/**
 * Challenge: Find within array
 * Source: https://www.codewars.com/kata/51f082ba7297b8f07f000001/train/javascript
 * Description: Your function will iterate through the members of the sequence in order until the provided function returns true; 
 * at which point your function will return that item's index.
 * 
 * @param {Array} arr - The input array to be checked.
 * @returns {boolean} Returns true if all elements are integers, false otherwise.
 */

/**
 * Finds the index of the first element in the array that satisfies the provided testing function.
 *
 * @param {Array} array - The array to search.
 * @param {Function} iterator - Function to test each element of the array. It takes two arguments:
 *   - currentItem: The current element being processed in the array.
 *   - index: The index of the current element being processed in the array.
 * @returns {number} - The index of the first element in the array that satisfies the testing function; otherwise, -1.
 */

function findInArray(array, iterator) {
  for(let idx = 0; idx < array.length; idx++){
    let currentItem = array[idx]
    let currentResult = iterator(currentItem,idx)
    if(currentResult){
      return idx
    }
  }
  return -1
}