Dots on Domino's Bones

Your function should return the optional number of diamond stones to be made for a given set of dice. No duplicate pieces.


function dotsOnDominoBones(n){
  if(n <= 0) return -1
    
  let dots = 0
  // Outer Loop count from 0 to n. Represents # of dots on one side of the domino.
  for(let i = 0; i <= n; i++){
 // Inner loop from i to n. Represents # of dots on other side of the domino.
    for(let j = i; j <= n; j++){
      dots += (i + j)
    }
  }
  return dots
}

// Tests:
console.log(dotsOnDominoBones(2)); // Should return 12
console.log(dotsOnDominoBones(3)); // Should return 30
console.log(dotsOnDominoBones(4)); // Should return 56
console.log(dotsOnDominoBones(5)); // Should return 90
console.log(dotsOnDominoBones(6)); // Should return 132