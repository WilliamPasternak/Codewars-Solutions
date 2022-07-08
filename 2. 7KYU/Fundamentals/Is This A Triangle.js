Is this a triangle?
  Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a,b,c){
  let arr = [a,b,c]
  arr.sort((a,b) => a > b ? 1 : -1)
  return arr[0] + arr[1] > arr[2]
}

