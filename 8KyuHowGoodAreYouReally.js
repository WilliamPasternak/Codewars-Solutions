/* 
8 kyu
How good are you really?
You receive an array with your peers' test scores. Now calculate the average and compare your score!
*/

function betterThanAverage(classPoints, yourPoints) {
  
  // Add your score to Average
  classPoints.push(yourPoints)
  
 // Calculate Average Score
  let averageScore = (classPoints.reduce((a,b) => a + b , 0)) / classPoints.length
  
  
  // Compare yourPoints to Average Score
  return yourPoints > averageScore ? true : false
  
  
  // Return true or false depnding on if you are above average
  
  
}
