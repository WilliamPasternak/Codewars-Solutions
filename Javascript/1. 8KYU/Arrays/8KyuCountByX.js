/*8 kyu
3/29
Count by X
Create a function with two arguments that will return an array of the first (n) multiples of (x).
*/
function countBy(x, n) {
  let multipliedArray = []
  for (let i = 1; i <= n ; i++){
    multipliedArray.push( x * i)
    
  }
  return multipliedArray  

}