Largest pair sum in array
Given a sequence of numbers, find the largest pair sum in the sequence.

function largestPairSum (numbers) {
  let sorted = numbers.sort((a,b) => a - b)
  return sorted[sorted.length - 1] + sorted[sorted.length - 2]   
}