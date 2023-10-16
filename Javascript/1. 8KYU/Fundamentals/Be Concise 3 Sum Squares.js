Be Concise III - Sum Squares

You are given a program sumSquares that takes an array as input and returns the sum of the squares of each item in an array. 

function sumSquares(array) {
  return array.reduce((a,b) => a + b ** 2, 0);
}