Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.


function inArray(array1,array2){
  // find which strings in arr1 are substrings of arr2
  const substrings = new Set()
  // get them in a seperate array
  for(let s of array1){
    for(let word of array2){
      if(word.includes(s)){
        substrings.add(s)
      }
    }

  }
  // sort and return that array
     return Array.from(substrings).sort()
}