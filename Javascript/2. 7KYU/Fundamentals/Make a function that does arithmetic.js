Make a function that does arithmetic!
function arithmetic(a, b, operator){
  let solution = 0
  
  if(operator === 'add'){ solution = a + b }
  else if(operator === 'subtract'){ solution = a - b }
  else if(operator === 'multiply') { solution = a * b }
  else  { solution = a / b }
  
  return solution
  
  
}