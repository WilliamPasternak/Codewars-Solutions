/* 7 kyu Sum of odd numbers*/
function rowSumOddNumbers(n) {
  if(n <= 1) return 1
  let startingNum = 1
  
  // Sets first number in row
for(let i = 1; i < n ;i++){
    startingNum = i * n + 1
 }
  // Calculates sum of row
let currentTotal = startingNum
let solution = 0
  
  // Add 2 to Current total. Then add current total to solution.
for(let i = 1; i < n ;i++){
  currentTotal += 2 
  solution += currentTotal 
}
  
  return solution + startingNum
}