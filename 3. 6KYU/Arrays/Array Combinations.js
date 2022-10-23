function solve(arr) {
let uniqueNums = arr.map(array => new Set(array))
let currentTotal =  1;  
  for(let i = 0; i< uniqueNums.length;i++){
    currentTotal *= uniqueNums[i].size
  }
  return currentTotal
};