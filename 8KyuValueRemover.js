/*8 kyu
Vowel remover*/

function shortcut (string) {
  // split string into array
  let arr = string.split('')
  // loop through checking each letter for AEIO or U
  for (let i = 0; i < arr.length ;i++)
     // if vowel is found remove it
    if(arr[i] === 'a'||
       arr[i] === 'e'||
       arr[i] === 'i'||
       arr[i] === 'o'||
       arr[i] === 'u'){
       // Needed to add i-- 
       arr.splice(i,1)
        i--
    }
    // join string, and return
   let str = arr.join('')
  return str
  }