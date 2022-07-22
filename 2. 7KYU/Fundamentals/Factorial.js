Factorial
function factorial(n) {
  if(n < 0 || n > 12){
    throw new RangeError("n must fall between 0 & 12")
  }
  if(n < 1){
    return 1
  }
  else{
    return  n * factorial( n - 1 )
  }
}
