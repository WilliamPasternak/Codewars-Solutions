/* 8 kyu
Calculate average 
Write a function which calculates the average of the numbers in a given list.
*/

function find_average(array) {  
  if(array.length === 0){
    return 0;
  }
  
  let total = array.reduce((a,b) => a + b , 0)
  return total / array.length
}