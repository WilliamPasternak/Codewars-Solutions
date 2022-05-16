/* 8 kyu SpeedCode #2 - Array Madness */
function arrayMadness(a, b) {

  let squaredSumA = 0
  let cubedSumB = 0
  for (let i = 0; i < a.length; i++){
      squaredSumA += a[i]**2
  }
   for (let i = 0; i < b.length; i++){
      cubedSumB += b[i]**3
  }
  
  return squaredSumA > cubedSumB
  
  
}