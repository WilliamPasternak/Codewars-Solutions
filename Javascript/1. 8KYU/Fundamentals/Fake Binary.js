Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  let digits = []
  for(let i = 0; i < x.length; i++){
    digits.push(x[i] < 5 ? '0' : '1')
  }
  return digits.join('')
}