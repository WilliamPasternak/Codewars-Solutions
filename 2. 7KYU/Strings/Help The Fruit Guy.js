function removeRotten(bagOfFruits) {
if(!bagOfFruits) return []
for (let i = 0; i < bagOfFruits.length; i++){
if (bagOfFruits[i].includes('rotten')){
  bagOfFruits[i] = bagOfFruits[i].slice(6).toLowerCase()
}
}
return bagOfFruits
  }

// Refactored
  function removeRotten(bagOfFruits){
  if(!bagOfFruits) { return []; }
  
  return bagOfFruits.map(function(fruit) {
    return fruit.replace("rotten", "").toLowerCase();
  });
}