Count the Digit
function nbDig(n, d) {
  let squares = []
  let digitCount = 0
  // Push all the squares from 0 - n
  for(let i = 0; i <= n; i++){
    squares.push(i*i)
  }  
  let strSquares = squares.join('')
  // Count each occurance of d.
  for(let j = 0; j < strSquares.length; j++){
    if(strSquares[j] == d ){
      digitCount++
    }
  }
  return digitCount
}
