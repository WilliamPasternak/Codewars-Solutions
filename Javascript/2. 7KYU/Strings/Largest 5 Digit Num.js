Largest 5 digit number in a series
Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function solution(digits){
  let largestSeen = digits.slice(0,5)
  for(let i = 4; i < digits.length ; i++){
    let currSlice = digits.slice(i - 4, i + 1)
    if(Number(currSlice) > Number(largestSeen)){
      largestSeen = currSlice
    }
  }
  return Number(largestSeen)
}
