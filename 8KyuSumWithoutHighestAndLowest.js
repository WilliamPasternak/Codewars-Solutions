/* 
8 kyu
Sum without highest and lowest number
*/

function sumArray(array) {

    if(!array){
      return 0
    }
let sortedArray = array.sort((a,b) => a - b)
 let slicedArray = sortedArray.slice(1,sortedArray.length -1)
  return slicedArray.reduce((prev,current) => prev + current, 0)
  
}
