Ones and Zeros

const binaryArrayToNumber = arr => {
arr.reverse()
let sum = 0
let bin = 1
  
for (let i = 0; i < arr.length ; i++){
      sum += arr[i] * bin    
      bin *= 2  
}
  return sum
  
};



// Parse Int
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);


// For Each
const binaryArrayToNumber = arr => {
arr.reverse()
let sum = 0
let bin = 1

arr.forEach(x => {
  sum += x * bin    
  bin *= 2  
})
  return sum 
};