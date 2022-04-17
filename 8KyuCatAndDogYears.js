/* Return their respective ages now as [humanYears,catYears,dogYears] */

var humanYearsCatYearsDogYears = function(humanYears) {
  let years = [];
  let dogYears = 0;
  let catYears = 0;
  
  
  if(humanYears >= 1){
    catYears += 15
    dogYears += 15
  }
    
  if(humanYears >= 2){
    catYears += 9
    dogYears += 9
  }
  if(humanYears >= 3){
    catYears += 4 * (humanYears -2)
    dogYears += 5 * (humanYears -2)
  }
  
years.push(humanYears)
  years.push(catYears)
  years.push(dogYears)
  
  
  return years
  
}
