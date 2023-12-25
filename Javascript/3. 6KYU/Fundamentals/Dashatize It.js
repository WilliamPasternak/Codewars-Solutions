/*
* Challenge: Dashatize it (Codewars)
* Source: https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript
* Description: 'Given an integer, return a string with dash '-' marks before and after
* each odd digit, but do not begin or end the string with a dash mark.'

* @param {number} num - Number that needs to be 'Dashatized'
* @returns {string} - A string representing 'num' with dashes applied based on above rules.

*/
/*
* Challenge: Dashatize it (Codewars)
* Source: https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript
* Description: 'Given an integer, return a string with dash '-' marks before and after
* each odd digit, but do not begin or end the string with a dash mark.'

* @param {number} num - Number that needs to be 'Dashatized'
* @returns {string} - A string representing 'num' with dashes applied based on above rules.

*/
function dashatize(num) {
  // Early Exit:
  if(num < 1) num *= -1
  // Ensure num is positive.
  num = Math.abs(num)
  const dashed = []
  const numAsStr = String(num)
  
  // iterate over digits.
  for(let i = 0; i < numAsStr.length; i++){
    const currNum = numAsStr[i]
    const numIsEven = currNum % 2 === 0 
   
    // Even Number:
    if(numIsEven){
      dashed.push(currNum)
    } else {
    dashed.push(dashed.length !== 0 ? `-${currNum}` : currNum);
  
  // If Next digit is even, add a dash (so there is one before and after odd #)
  if (numAsStr[i + 1] % 2 === 0) {
    dashed.push('-');
  }
}
  }
  return dashed.join('')
}