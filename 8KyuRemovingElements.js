/* 8 kyu
Removing Elements 
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
*/

function removeEveryOther(arr){
 let everyOther = []  
 for(let i = 0; i < arr.length; i++){  
   if( (i + 2) %2 === 0 ){  // if 0 + 2 %2  === 0
     everyOther.push(arr[i]) 
   }
 }
  return everyOther
}