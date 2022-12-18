/*
Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
*/ 
function sakuraFall(v) {
   if(v <= 0){
    return 0
  }
  return Number(400 / v) 
  
}