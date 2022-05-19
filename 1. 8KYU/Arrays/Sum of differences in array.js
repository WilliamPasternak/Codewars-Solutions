/*Sum of differences in array
our task is to sum the differences between consecutive pairs in the array in descending order.
*/
function sumOfDifferences(arr) {
arr.sort((a,b) => b - a)
  let differences = []
for(let i = 0; i < arr.length -1 ; i++){
  differences.push(arr[i]-arr[i+1])
}
  return differences.reduce((acc,cur) => acc + cur, 0)
}