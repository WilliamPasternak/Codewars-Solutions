/**
 * Challenge: Hamming Distance
 * Source: https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/train/javascript
 * Description: 
 * The Hamming Distance is a measure of similarity between two strings of equal length. 
 * Complete the function so that it returns the number of positions where the input strings do not match.
*/
/**
 * Calculates the Hamming distance between two strings.
 *
 * The Hamming distance is the number of positions at which the corresponding
 * symbols are different.
 *
 * @param {string} a - The first input string.
 * @param {string} b - The second input string.
 * @returns {number} - The Hamming distance between the input strings. 
                       OR Returns -1 if the input strings have different lengths.
 *
 * @example
 * const distance = hamming("I like turtles", "I like turkeys");
 * // Result: 3 (characters at index 3, 4, and 5 are different)
*/

function hamming(a,b) {
  // Check for invalid input: Different length strings
  if(a.length !== b.length) return -1
  
  let hammingDistance = 0
  // Iterate over both strings simultaneously
  for(let i = 0; i < a.length; i++){
    // Get each strings current character
    let [aChar,bChar] = [a[i],b[i]]
    // compare current characters, if different increment hammingDistance
    if(aChar !== bChar){
      hammingDistance++
    } 
  }
  return hammingDistance
}
// Tests:
// Different Strings
console.log('Test O1: Different Strings: \n','a: "I like turtles", b: "I like turkeys"', '\n', 'Result:', hamming("I like turtles","I like turkeys"), 'Expected:', 3)
// Same String
console.log('Test O2: Same String: \n', 'a: "Hello World", b: "Hello World"', '\n' , 'Result:', hamming("Hello World","Hello World"), 'Expected:', 0)
// Different Casing
console.log('Test O3: Different Casing: \n', 'a: "Espresso", b: "espresso"', '\n' , 'Result:', hamming("Espresso","espresso"), 'Expected:', 1)
// Different Lengtht Strings
console.log('Test O4: Different Lengths: \n', 'a: "1", b: "1,2"', '\n' , 'Result:', hamming("1","1,2"), 'Expected:', -1)
