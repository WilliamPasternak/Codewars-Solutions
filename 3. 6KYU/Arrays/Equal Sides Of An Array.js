You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr){
  let left = 0
  let right = arr.reduce((acc,cur) => acc + cur, 0)
 
  for(let i = 0; i < arr.length; i++){
    left += arr[i]
    if(left === right) return i
    right -= arr[i]    
  }
  return -1
}