Draw stairs

Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

function drawStairs(n) {
  let stairs = []
    if(n === 1) return 'I'
  
  for(let i = 0; i < n; i++){
     let currStair = 'I'.padStart(i+1,' ')
     i + 1 === n ? stairs.push(currStair ) : stairs.push(currStair + '\n')
  }

  return stairs.join('')
}