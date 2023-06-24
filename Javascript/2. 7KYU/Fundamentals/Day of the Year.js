Day of the Year

Work out what number day of the year it is based on the date.

function toDayOfYear(arr) {
  const [days,month,year] = arr
  if(month === 1) return days
  if(month === 2) return days + 31
  
  const daysPerMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
  let [isLeapYear,numDaysElapsed] = [false,0]
  
  // Determine if a leap year
 if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
     isLeapYear = true;
 }
  
  // Add days to total days elapsed
  for(let i = 0; i <= month - 2; i++){
    let currMonthDays = daysPerMonth[i]
    numDaysElapsed += currMonthDays
  }
  
  return isLeapYear ? numDaysElapsed + days + 1 : numDaysElapsed + days
  
}