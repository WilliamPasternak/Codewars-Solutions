What dominates your array?

Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

function dominator(arr) {
  const dominator = Math.floor(arr.length / 2)
  const intCounts = {}
  
  // Count occurances of each integer
  for(let int of arr){
    intCounts[int] = intCounts[int] + 1 || 1
  }
  // Look up integer count, if count exceeds dominator, return int
  for(let int of arr){
    if(intCounts[int] > dominator){
      return int
    }
  }
  // Return -1 if no number is a majority
  return -1
}
