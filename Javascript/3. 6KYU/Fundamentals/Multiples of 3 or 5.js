Multiples of 3 or 5

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

function solution(number){
  let sumOfMultiples = 0
  for(let i = 0; i < number ; i++){
    let currentNum = i
    if(currentNum % 3 === 0 || currentNum % 5 === 0) sumOfMultiples+= currentNum
  }
  return sumOfMultiples
}