/* String repeat
Write a function called repeatStr which repeats the given string string exactly n times.
*/



function repeatStr (n, s) {
  let repeatedStr = ''
  for (let i = 0; i < n ;i++){
    repeatedStr += s;
  }
  return repeatedStr;
}