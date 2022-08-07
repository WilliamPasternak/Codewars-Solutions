Form The Minimum
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

function minValue(values){
  let unique = [...new Set(values)]
  return Number(unique.sort().join(''))
}

