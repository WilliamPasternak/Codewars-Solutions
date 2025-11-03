Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){  
  let hoursInMS = (h * 60 * 60) * 1000
  let minsInMS = (m * 60) * 1000
  let secsInMS = s * 1000

  return hoursInMS + minsInMS + secsInMS  
}

// Test
console.log(past(0, 1, 1), 61000)