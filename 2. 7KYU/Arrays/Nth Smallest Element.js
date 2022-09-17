Nth Smallest Element 
Given an array/list [] of integers , Find the Nth smallest element in this array of integers

function nthSmallest(arr, pos){
 arr.sort((a,b) => b - a )
 return arr[arr.length - pos]
}