/*
8 kyu
All Star Code Challenge #18
*/
function strCount(str, letter){  
 let arr = str.split('').filter(char => char.includes(letter))
 return arr.length
}