Length and two values.

Given an integer n and two other values, build an array of size n filled with these two values alternating.

function alternate(n, firstValue, secondValue){
  let filledArray = []
  for(let i = 0; i < n ; i++){
    filledArray.push(i % 2 === 0 ? firstValue : secondValue)
  }
  return filledArray
}