/*
Create an application that will display the number of kilometers per liter (output) based on the number of miles per imperial gallon (input).
*/


function converter (mpg) {
  // 1.609344 km / gal. 4.54609188 Liters / gal.
  // Convert MPG to KPG. Convert Galon to Liters.
  let kpl = ( mpg * 1.609344 ) / 4.54609188 
  
  // If the answer ends with a 0, it should be rounded off without the 0. 
   if(String(kpl).endsWith('0')){
     return Number(kpl.toFixed(1))
   } 
  return Number(kpl.toFixed(2))
  
}


