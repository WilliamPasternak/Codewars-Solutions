Is n divisible by (...)?

Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

function isDivisible(){
  const [numsToCheck,numerator] = [arguments.length, arguments[0]]
  
  for(let i = 1; i < numsToCheck; i++){
    if(numerator % arguments[i] !== 0) return false
  }
  
  return true
}

