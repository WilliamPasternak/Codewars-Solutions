Find the middle element
function gimme (triplet) {
  let min = triplet.indexOf(Math.min(...triplet))
  let max = triplet.indexOf(Math.max(...triplet))
  return 3 - min - max
}