/* 
8 kyu
Array plus array
*/


function arrayPlusArray(arr1, arr2) {
  let sumOfArr1 = arr1.reduce((a,b) => a + b , 0)
  let sumOfArr2 = arr2.reduce((a,b) => a + b , 0)
  return sumOfArr1 + sumOfArr2
}
