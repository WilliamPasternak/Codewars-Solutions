function findShort(s){
  s = s.split(' ')
  let shortest = s[0].length;
  
  s.forEach(x => {
    if(x.length < shortest){
      shortest = x.length
    }
  })
  return shortest
}
