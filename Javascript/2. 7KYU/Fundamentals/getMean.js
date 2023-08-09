function getMean(arr, x, y) {
  // If x or y are less than 1, OR, if x or y is greater than arr length
   if (x <= 1 || y <= 1 || x > arr.length || y > arr.length) return -1;
  
  // Calculate first x numbers mean
  const sumFirstX = arr.slice(0,x).reduce((acc,cur) => acc + cur)
  const meanFirstX = sumFirstX / x
  
  // Calculate last y numbers mean
  const sumLastY = arr.slice(-y).reduce((acc,cur) => acc + cur)
  const meanLastY = sumLastY / y

  // return xMean / yMean
  return ( meanFirstX + meanLastY ) / 2
}