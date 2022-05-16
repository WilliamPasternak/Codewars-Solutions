/*8 kyu
To square(root) or not to square(root)
*/

function squareOrSquareRoot(array) {
 let newArr = array.map(x => {
   if(Number.isInteger(Math.sqrt(x))){
     return Math.sqrt(x) 
   }
   else{
     return x * x
   }
 })
  return newArr;
}

