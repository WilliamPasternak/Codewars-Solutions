Simple Fun #160: Cut The Ropes

You are given N ropes, where the length of each rope is a positive integer. At each step, you have to reduce all the ropes by the length of the smallest rope.

The step will be repeated until no ropes are left. Given the length of N ropes, print the number of ropes that are left before each step.


function cutTheRopes(a) {
  // Copy the input data.
  let arr = a
  // Create array to hold num of remaining number of ropes
  let ropesRemaining = []
  while(arr.length > 0){
    // Determine the minimum rope length.
    let min = Math.min(...arr)
    // push remaining # of ropes
    ropesRemaining.push(arr.length)
    // Remove any numbers of length 'min'
    arr = arr.filter(num => min !== num)
  }
  return ropesRemaining
}