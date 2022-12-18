Alphabet war
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

function alphabetWar(fight){
  const left = {w:4, p: 3, b: 2, s: 1}
  const right = {m: 4, q: 3, d: 2, z: 1}
  
  let leftScore = 0
  let rightScore = 0
  
  for(let char of fight){
    if(left[char]){
      leftScore += left[char]
    }
    if(right[char]){
      rightScore += right[char]
    }
  }
  if (leftScore > rightScore) return 'Left side wins!'
  else if (rightScore > leftScore) return 'Right side wins!'
  else{
    return "Let's fight again!";
  }  
}