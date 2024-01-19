/**
 * Challenge: X-Bonacci
 * Source: https://www.codewars.com/kata/556e0fccc392c527f20000c5/train/javascript
 * Description:  Build a Xbonacci function that takes a signature of X elements -
 * and returns the first n elements of the so seeded sequence.
/**
 * Generate a sequence of numbers using the Xbonacci sequence.
 * @param {number[]} sequence - The initial sequence of numbers.
 * @param {number} n - The number of elements to generate in the Xbonacci sequence.
 * @returns {number[]} - The Xbonacci sequence of length n.
 */
function Xbonacci(sequence,n){
  // If input size is 0, return empty array.
  if(!n) return []
  // Copy first n elements from sequence.
  const results = sequence.slice(0,n)
  // Establish size of the sequence
  const sequenceSize = results.length 
  while(results.length < n){
    // Create pointers representing ends of sequence
    let right = results.length - 1 
    let left = (right - sequenceSize) + 1 
    // Variable to hold sum of next number in sequence
    let nextNum = 0
    // Sum up everything between left & right pointers.
    for(let i = left; i <= right; i++){
      nextNum += results[i]
    }
    // Add next number to the results array
    results.push(nextNum)   
    // Move left & right pointers forward.
    left++
    right++
  }
  // Return results
  return results
}