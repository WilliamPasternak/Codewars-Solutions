// Enumerable Magic #1 - True for All?
// Task: Create a method all which takes two params:
// a sequence
// a function 
// Return: true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

//Original solution, 
// 'or false' needed at the end based on failing unprovided test where 0 or 1 were potential function outputs.
function all( arr, fun ){
let trueForAll = true
arr.forEach(num => trueForAll = fun(num))
  return trueForAll || false
}

// Refactored Code
 const all = ( arr, fun ) =>  arr.every(fun)