/*8 kyu
Holiday VIII - Duty Free */
function dutyFree(normPrice, discount, hol){
  let savingsPerBottle = normPrice * (discount / 100)
  
  return Math.floor(hol / savingsPerBottle)
}