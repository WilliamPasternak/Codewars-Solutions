
Write a program that outputs the top n elements from a list.

function largest(n, array) {
  if(!n) return []
  array.sort((a,b) => a - b)
  return array.slice(-n)
  }