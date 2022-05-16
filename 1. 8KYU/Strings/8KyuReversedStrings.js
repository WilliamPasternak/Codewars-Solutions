/* 
8 kyu: Reversed Strings
Complete the solution so that it reverses the string passed into it. 
*/


function solution(str){
  let reversedString = '';
  for (let i = str.length - 1 ; i >= 0; i--){
      let currentLetter = str[i]
      reversedString += currentLetter;
  }
  return reversedString
  
}