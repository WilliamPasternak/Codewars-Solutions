Sum of the first nth term of Series
function SeriesSum(n){
  let denominator = 1
  let sum =  0;
  
  if(n === 0) {
    return '0.00'
  }
  
  for(let i = 1; i <= n ; i++){
    sum += 1 * (1 / denominator)
    denominator += 3
  }
return sum.toFixed(2)  
}