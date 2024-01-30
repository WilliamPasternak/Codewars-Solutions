/**
 * Challenge: The Vowel Code
 * Source: https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
 * Description: 
 *  Step 1: Create a function called encode() to replace all the lowercase vowels in a given string.
 *  Step 2: Ceate a function called decode() to turn the numbers back into vowels according to the same pattern.
/**
 * Replaces all lowercase vowels in a given string with numbers according to the following pattern:
 * a -> 1, e -> 2, i -> 3, o -> 4, u -> 5
 * 
 * @param {string} str - The input string to be encoded.
 * @returns {string} - The encoded string.
 */
function encode(str) {
  const key = { 'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5 }
  const encodedString = str.split('').map(char => {
    if (char in key) {
      return key[char]
    } else {
      return char
    }
  });
  return encodedString.join('')
}
/**
 * Turns numbers in a given string back into vowels according to the pattern:
 * 1 -> a , 2 -> e , 3 -> i, 4 -> o ,5 -> u
 * 
 * @param {string} str - The input string to be decoded.
 * @returns {string} - The decoded string.
 */
function decode(str) {
  const key = { '1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u' }
  const decodedString = str.split('').map(char => {
    if (char in key) {
      return key[char]
    } else {
      return char
    }
  });
  return decodedString.join('');
}

// Tests for encode function:
// Different Strings
console.log('Test O1: Different Strings: \n', 'Input: "hello", Expected Output: "h2ll4"', '\n', 'Result:', encode("hello"), 'Expected:', 'h2ll4');
// Different Casing
console.log('Test O2: Different Casing: \n', 'Input: "How are you today?", Expected Output: "H4w 1r2 y45 t4d1y?"', '\n', 'Result:', encode("How are you today?"), 'Expected:', 'H4w 1r2 y45 t4d1y?');
// Different Length Strings
console.log('Test O3: Different Lengths: \n', 'Input: "This is an encoding test.", Expected Output: "Th3s 3s 1n 2nc4d3ng t2st."', '\n', 'Result:', encode("This is an encoding test."), 'Expected:', 'Th3s 3s 1n 2nc4d3ng t2st.');

// Tests for decode function:
// Same Strings
console.log('Test O4: Same Strings: \n', 'Input: "h2ll4", Expected Output: "hello"', '\n', 'Result:', decode("h2ll4"), 'Expected:', 'hello');
// Different Casing
console.log('Test O5: Different Casing: \n', 'Input: "H4w 1r2 y45 t4d1y?", Expected Output: "How are you today?"', '\n', 'Result:', decode("H4w 1r2 y45 t4d1y?"), 'Expected:', 'How are you today?');
// Different Length Strings
console.log('Test O6: Different Lengths: \n', 'Input: "Th3s 3s 1n 2nc4d3ng t2st.", Expected Output: "This is an encoding test."', '\n', 'Result:', decode("Th3s 3s 1n 2nc4d3ng t2st."), 'Expected:', 'This is an encoding test.');

