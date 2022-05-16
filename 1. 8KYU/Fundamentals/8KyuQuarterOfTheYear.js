/* 
8 kyu
Quarter of the year 
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
*/

const quarterOf = (month) => {
 
  if (month / 12 <= 0.25){
    return 1
  }
  if (month / 12 <= 0.5){
    return 2
  }
  if (month / 12 <= 0.75){
    return 3
  }
  if (month / 12 <= 1){
    return 4
  
  
  
  }
  
  
  
}