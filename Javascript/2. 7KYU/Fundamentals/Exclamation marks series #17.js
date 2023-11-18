Exclamation marks series #17
https://www.codewars.com/kata/57fb44a12b53146fe1000136/train/javascript
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".


function balance(left,right){  
  const leftWeight = calculateWeight(left)
  const rightWeight = calculateWeight(right)
  
  if (leftWeight > rightWeight) return 'Left'
  else if (rightWeight > leftWeight) return 'Right'
  else return 'Balance'
}

function calculateWeight(left){
  let startingWeight = 0
  for(let char of left){
    if (char === '!') startingWeight+=2
    else if (char === '?') startingWeight+=3
  }
  return startingWeight
}