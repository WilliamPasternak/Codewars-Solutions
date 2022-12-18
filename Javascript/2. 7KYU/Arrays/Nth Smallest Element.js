Nth Smallest Element 
Given an array/list [] of integers , Find the Nth smallest element in this array of integers

// Checks from back of array
function nthSmallest(arr, pos){
let sorted = arr.sort((a,b)=> b-a);
return sorted[arr.length-pos]
}

// Checks from front of array
function nthSmallest(arr, pos){
let sorted = arr.sort((a,b)=> a-b);
return sorted[pos -1]
}