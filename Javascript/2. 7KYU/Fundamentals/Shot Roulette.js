Laxative Shot Roulette
https://www.codewars.com/kata/5b02ae6aa2afd8f1b4001ba4/train/javascript

function getChance(numShots, numLaxatives, shotsTaken) { 
  let probability = 1
  
  for(let i = 0; i < shotsTaken; i++){
    let currProb = numLaxatives / numShots
    probability*= 1 - currProb
    numShots--
  }
  return Number(probability.toFixed(2))
}