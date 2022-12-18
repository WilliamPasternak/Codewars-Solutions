Tortoise racing

Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.



function race(v1, v2, g) {
// If first tortoise is faster, 2nd will never catchup
  if (v1 > v2) return null
  
  // 70 / (130)
  const timeToCover = g /(v2 - v1)
  
// Convert timeToCover into hours, minutes, and seconds
  let hours = Math.floor(timeToCover)
  let mins  = Math.floor(timeToCover * 60 % 60) 
  let secs  = Math.floor(timeToCover * 3600 % 60)
  
  return [hours,mins,secs]
}
