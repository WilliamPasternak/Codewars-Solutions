/* 
8 kyu
Filling an array (part 1)
Write a function that produces an array with the numbers 0 to N-1 in it.
*/

function arr(num){
  let newArr = []
  for (let i = 0; i < num ; i++ ){
    newArr.push(i)
  }
  return newArr
}