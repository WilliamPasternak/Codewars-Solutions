Sums of Parts

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

function partsSums(ls) {
  // Reverse array
  const reversed = ls.reverse()
  const sums = []
  // while array has a length reduce array, and push its value to new array, pop off value
  while(reversed.length > 0){
    const sum = reversed.reduce((acc,curr) => acc + curr)
    sums.push(sum)
    reversed.pop()
  }
  // after array doesn't have length push 0.
  sums.push(0)
  // return array
  return sums
}