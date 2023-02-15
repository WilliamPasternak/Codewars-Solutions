function findOutlier(integers){
  const evens = []
  const odds = []
  let outlier;
  // iterate over integers, if odd/even push to corresponding array
  for(let int of integers){
   int % 2 === 0 ?  evens.push(int) : odds.push(int)
  }
  evens.length < odds.length ? outlier = evens : outlier = odds  
  // whichever array is shorter, return the first value
  return outlier[0]
}

// Tests:
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]) , '11')
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]) , '160')
