//Original
function solve(arr) {
let uniqueNums = arr.map(array => new Set(array))
let currentTotal =  1;  
  for(let i = 0; i< uniqueNums.length;i++){
    currentTotal *= uniqueNums[i].size
  }
  return currentTotal
};

//Refactored 
function solve(arr) {
let uniqueNums = arr.map(array => new Set(array).size)
return uniqueNums.reduce((acc,cur)=> acc * cur)
};

// One liner with ES6
const solve = arr => arr.map(array => new Set(array).size).reduce((acc,cur) => acc * cur)