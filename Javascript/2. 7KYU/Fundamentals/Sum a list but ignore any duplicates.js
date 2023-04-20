Sum a list but ignore any duplicates

Please write a function that sums a list, but ignores any duplicate items in the list.

function sumNoDuplicates(numList) {
  let sum = 0
  const numsSeen = {}
  
  // Count occurances of each number in numList
  for(let num of numList){
    numsSeen[num] =  numsSeen[num] + 1 || 1
  }
  
  // If number occurs once, add it to the sum
  for(let num of numList){
    if(numsSeen[num] === 1) sum += num
  }
  return sum 
}