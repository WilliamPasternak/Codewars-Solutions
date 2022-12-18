Power of two
function isPowerOfTwo(n){
  if (n === 1) return true
  if (n === 0) return false
 
 let powOf2 = 1
 
 while(powOf2 < n){
    powOf2 *= 2
   if(powOf2 === n){
     return true
   }
 }
   return false
  
}