/* 
8 kyu
Sum Mixed Array
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

*/

function sumMix(x){
  let allNums = x.map(x => +x) // Turns all elements to numbers
return allNums.reduce((a,b) => a+b,0)   // Sums all numbers
}