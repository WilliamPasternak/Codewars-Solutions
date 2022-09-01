Return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.

  function sumTriangularNumbers(n) {
  if(n < 0) return 0

  let numsToSum = {1:1}
  let triangleSum = 0

  for(let i = 2; i <= n; i++){      
    numsToSum[i] = i + numsToSum[i - 1]
  }

  for(let num in numsToSum){
    triangleSum += numsToSum[num]
  }
 
  return triangleSum
  }