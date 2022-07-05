Beginner Series #3 Sum of Numbers

function getSum( a,b ){
  let total = 0;
  for(let i = Math.min(a,b); i <= Math.max(a,b); i++){
    total += i
  }
    return total
}


// Arithimitic Progression (Gauss Summation)

const getSum = (a, b) => (Math.abs(a - b ) + 1) * (a + b) / 2;