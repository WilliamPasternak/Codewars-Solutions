/**
 * Challenge: Is Integer Array?
 * Source: https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript
 * Checks if all elements in the given array are integers.
 *
 * @param {Array} arr - The input array to be checked.
 * @returns {boolean} Returns true if all elements are integers, false otherwise.
 */

function isIntArray(arr) {
  // Check for invalid inputs (null,undefined,NaN, Empty Array)
  if(arr === null || arr === undefined || arr === NaN || !arr) return false
  // If arr is valid, iterate over arr
  for(let i = 0; i < arr.length; i++){
  const currElement = arr[i]
  // If current element is not an integer, or has a decimal point
  if (!Number.isInteger(currElement) || currElement !== Math.floor(currElement)) {
      return false;
    }
   }
  // if we reach end of array,
  return true
}