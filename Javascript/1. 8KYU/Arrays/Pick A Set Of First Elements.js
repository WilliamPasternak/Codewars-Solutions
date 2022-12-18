/*
Pick a set of first elements
Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.
If n == 0 return an empty sequence []
*/

function first(arr, n = 1) {
  return arr.slice(0,n)
}