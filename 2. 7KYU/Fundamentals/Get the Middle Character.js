function getMiddle(s){
  
  // If 's' has an even # of letters
  if(s.length % 2 === 0){ 
    return s.charAt(s.length / 2 - 1) + s.charAt((s.length / 2)  )
  }
  // If 's' has an odd # of letters
  return s.charAt(Math.max(s.length /2))

}