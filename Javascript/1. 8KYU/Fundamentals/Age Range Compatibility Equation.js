Age Range Compatibility Equation

Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

function datingRange(age){
  let min = ( age / 2 ) + 7
  let max = ( age - 7 ) * 2
  if(age <= 14){
    min = age - (0.10 * age)
    max = age + (0.10 * age)
  }
  return `${Math.floor(min)}-${Math.floor(max)}`
}