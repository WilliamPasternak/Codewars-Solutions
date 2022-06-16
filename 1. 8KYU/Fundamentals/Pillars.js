Pillars

function pillars(num_pill, dist, width) {
  dist *= 100 // Convert meters to cm. 
 if (num_pill === 1){
   return 0
 }
  if (num_pill === 2){ 
    return dist
  }
  else {
    return ((num_pill - 1) * dist ) + (width *  (num_pill - 2))
  }
  
}