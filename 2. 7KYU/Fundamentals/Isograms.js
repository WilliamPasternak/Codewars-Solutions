Isograms
function isIsogram(str){
  let mySet = new Set()
  str = str
            .toLowerCase()
            .split('')
  str.forEach(x => mySet.add(x))
  return mySet.size === str.length 
}