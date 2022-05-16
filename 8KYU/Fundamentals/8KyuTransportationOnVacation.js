/* 
8 kyu
Transportation on vacation
Different # days offers discounts.
*/


function rentalCarCost(d) {
  let total = d * 40;
  
   // 7+ days $50 discount
  if (d >= 7){
    total -= 50;
    return total
  }
    // 3+ days $20 discount
  if (d >= 3){
    total -= 20
    return total
  }
  return total;
 

  
  
  
}