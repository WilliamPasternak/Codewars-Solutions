Power of 4

Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

function powerOf4(n) {
  // Only Accept Integers
  if (typeof n !== "number") return false
  // Start with lowest power of 4
  let currPowOf4 = 1
  // Check if provided Int is a power of 4, Calculate next power of 4
  while(n >= currPowOf4){
    if(n === currPowOf4) return true
    currPowOf4 *= 4
  }  
  return false
}
