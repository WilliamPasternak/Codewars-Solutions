Gauß needs help! (Sums of a lot of numbers).
function f(n){
// Edge Cases:
if(typeof(n) !== 'number') return false
if(n <= 0) return false
if(Number.isInteger(n) === false) return false

 
  return (n * (n + 1)) / 2
  
};