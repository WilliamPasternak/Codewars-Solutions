/*
8 kyu
Squash the bugs
*/

function findLongest(str){
  
  let spl = str.split(" ");
  let longest = 0
  
  for (let i = 0; i < spl.length; i++){
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
    }
   return longest
}
 