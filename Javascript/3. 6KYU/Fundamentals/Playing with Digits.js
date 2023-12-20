Playing with digits
Given two positive integers n and p, we want to find a positive integer k, if it exists, 
such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.



/**
 * @param {number} n - The base number.
 * @param {number} p - The starting power.
 * @returns {number} - The positive integer k or -1 if not found.
 */
function digPow(n, p){
  // Find sum of n[0]^p + n[1]^p+1 + n[2]^p+2 ...
  const sumOfPowers = calculatesSum(n,p) 
  // Divide sum by n to find potential k value.
  let k = sumOfPowers / n  
  // If k is a positive integer
  if(k > 0 && Number.isInteger(k)){
    return k
  }
  return -1  
}


/**
 * Calculates the sum of powers for the given number and starting power.
 * @param {number} n - The base number.
 * @param {number} p - The starting power.
 * @returns {number} - The sum of powers.
 */
function calculatesSum(n,p){
  const numberTested = String(n)
  let sumOfPowers = 0 
  for(let i = 0; i < numberTested.length; i++){
    sumOfPowers += numberTested[i]**(p+i)
  }
  return sumOfPowers
}

// Tests:
console.log(digPow(89,1), 1) // 89 * 1 = 89
console.log(digPow(92,1),-1) // 9 + 4 = 13 times no number = 92 * k
console.log(digPow(695,2),2) // 36, 729, 625 = 1390. 1390 / 695 = 2
console.log(digPow(46288,3),51) // 4**3 + 6**4 + 2**5 + 8**6 + 8**7 = 2360688 / 46288 = 51

