Find the sum of all multiples of n below m
function sumMul(n,m){
 if(n <= 0 || m <= 0){
   return 'INVALID'
 }
  let sumOfMul = 0
for(let i = 0 ; i < m ; i += n ){
  sumOfMul += i
}
  return sumOfMul
}