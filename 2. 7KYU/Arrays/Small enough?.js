Small enough? - Beginner
function smallEnough(a, limit){
  let filtered = a.filter(x => x <= limit)
  
  if(a.length === filtered.length){
    return true
  }
  return false
}