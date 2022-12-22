Highest Rank Number in an Array
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

function highestRank(arr){
  let numCount = {}
  for(let num of arr){
    numCount[num] = numCount[num] + 1 || 1
  }
  
  let largestNum = 0
  let highestFreq = 0
    
  
  for(let num in numCount){
    // Track Most Frequent
    if(numCount[num] >= highestFreq){
      highestFreq = numCount[num]
    // Tracks Largest Num
    if(Number(num) >= largestNum){
      largestNum = Number(num)
     }
    }
  }
  return largestNum
}