Find the odd int

Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  if(A.length === 1) return A[0]
  const freqCount = {}
  // Count occurances of each number
  for(let num of A){
    freqCount[num] = (freqCount[num] || 0 ) + 1
  }
  // Check if each number occurs and even or odd number of times.
  for(let num in freqCount){
    if(freqCount[num] % 2 !== 0){
      return Number(num)
    }
  }
}

// Tests:
console.log(findOdd([7]),7)
console.log(findOdd([0]),0)
console.log(findOdd([1,1,2]),2)
console.log(findOdd([0,1,0,1,0]),0)
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]),4)