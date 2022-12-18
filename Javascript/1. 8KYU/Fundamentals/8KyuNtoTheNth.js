/*
8 kyu
N-th Power
You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
*/

function index(array, n){
  //If n is outside array, return -1
  if (n >= array.length){
    return -1
  }
  // Find the nth power of array[n]
  let nToTheNth = 1
  for (let i = 0; i < n; i++){
    nToTheNth *= array[n]
  }
  return nToTheNth;
  
  
  
}