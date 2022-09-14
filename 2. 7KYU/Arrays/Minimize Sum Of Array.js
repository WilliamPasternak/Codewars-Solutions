Minimize Sum Of Array
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product 

/* Sort the array in ascending order
   Multiply the smallest value (arr.shift) and the largest value (arr.pop)
   Add this product to the sum
   Continue until all numbers have been removed from arr
   Return sum 
*/

function minSum(arr) {
  let sum = 0
  arr.sort((a,b) => a - b)
  while(arr.length){
    sum += (arr.shift() * arr.pop())
  }  
return sum
}