How many stairs will Suzuki climb in 20 years?
  Your function should return the 20 year estimate of the stairs climbed using the formula above.

// Function accepts an array of days, each which are an array of values.
function stairsIn20(s){  
  // Create a new array, and sum up the values of each day.
 return s.map(x => x.reduce((acc,curr) => acc + curr))
  // Reduce the new array, so we get a single year total. Multiply by 20 for 20 year estimate.
   .reduce((acc,curr) => acc + curr) * 20
}