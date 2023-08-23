How many zeros are at the end of n!!

Define n!! as
n!! = 1 * 3 * 5 * ... * n if n is odd,
n!! = 2 * 4 * 6 * ... * n if n is even.
Hence 8!! = 2 * 4 * 6 * 8 = 384, there is no zero at the end. 30!! has 3 zeros at the end.
For a positive integer n, please count how many zeros are there at the end of n!!

function countZeros(n) {
  // Determine if n is even or odd
  const nIsEven = n % 2 === 0
   
  // Calculate n!!
  let product = 1
  if(nIsEven){
    for(let i = 2; i <= n; i+= 2){
      product *= i
    }
  }
  else{
    for(let i = 1; i <= n; i+= 2){
      product *= i
    }
  }
   
  // Convert product Number to String and reverse
  const productStr = String(product).split('').reverse()
  
  // Count zeros, if current char is zero, increment i. If not return index
  for(let i = 0; i < productStr.length; i++){
    if(productStr[i] !== '0') return i 
  }
  
}