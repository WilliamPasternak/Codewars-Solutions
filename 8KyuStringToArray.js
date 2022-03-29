/* 
3/29
8 kyu
Convert a string to an array
Write a function to split a string and convert it into an array of words
*/


//As a normal function  
function stringToArray(string){
  return string.split(' ')
}


//As an arrow function
const stringToArray = string => string.split(' ');