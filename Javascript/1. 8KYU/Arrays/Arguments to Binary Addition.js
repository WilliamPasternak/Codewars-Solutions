Arguments to Binary addition
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

function arr2bin(arr){
// Remove all non-numbers from array.
 let justNums = arr.filter(x => typeof x === 'number')
 // Sum all numbers in array
 let sumAsInt = justNums.reduce((acc,cur) => acc + cur , 0 )
 // Convert integer number to binary string.
 return sumAsInt.toString(2)
 }

// Refactored Code
const arr2bin = arr => arr.filter(x => typeof x === 'number').reduce((acc,cur) => acc + cur , 0 ).toString(2)
