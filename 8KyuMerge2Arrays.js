/* 8 kyu
Merge two sorted arrays into one */

function mergeArrays(arr1, arr2) {
  // Combine 2 arrays and sort in ascending order
  let sortedArr = arr1.concat(arr2).sort((a,b)=> a < b ? -1 : 1)
  // Remove duplicates
//   return  [...new Set(sortedArr)];
  
  //Using Filter to return a new array of items where (first) index of equals index
  return sortedArr.filter((element, index) => {
    return sortedArr.indexOf(element) === index;
    
    //
});
  
}