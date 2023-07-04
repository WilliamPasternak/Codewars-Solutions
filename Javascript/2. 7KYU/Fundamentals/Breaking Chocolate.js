Breaking chocolate problem

Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

function breakChocolate(n,m) {
  let area = n * m
  if(area === 0) return 0
  return area - 1
}