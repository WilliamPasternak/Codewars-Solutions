/*
* Challenge: Remove the parentheses
 * Source: https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript
 * Description: Remove everything inside the parentheses as well as the parentheses themselves.
*/

/*
 * Removes all parentheses and characters inside parentheses from string.
 * @param {string} s - Input string from which we are extracting chars.
 * @returns {string} - Returns a new string containing only chars outside of parens

*/
function removeParentheses(s){
  // create an empty array to hold valid characters
  const validChars = []
  // create an counter of open parens.
  let openParenthesesCount = 0
  // Iterate over each character in the input string.
  for(let char of s){
    // if parens is encountered incrementing count,
    if (char === '('){
      openParenthesesCount++
    }
    // if closing parens is encountered, decrease count.
   else if(char === ')'){
      openParenthesesCount--
    }
     // if count === 0, push char to new arr
    else if(openParenthesesCount === 0){
      validChars.push(char)
    }
  }
  // once we reach end of array, join the string and return it
  return validChars.join('')
}

// Tests:
console.log(removeParentheses('test(ing)'),'test')
console.log(removeParentheses('hi((there))'),'hi')
console.log(removeParentheses('hi(mynameis(will))'),'hi')