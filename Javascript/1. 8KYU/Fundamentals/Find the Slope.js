Find the Slope

Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

function slope(points){
  let [a,b,c,d] = points
  let denominator = c - a
  if(denominator === 0){
    return 'undefined'
  }
 return String((d - b) / (c - a))
}