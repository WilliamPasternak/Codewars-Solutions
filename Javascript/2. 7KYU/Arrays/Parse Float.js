Parse float
Write a function that finds the sum of all its arguments.
function sum() {
  let nums = [...arguments]
  return nums.reduce((a,b) => a + b)
}