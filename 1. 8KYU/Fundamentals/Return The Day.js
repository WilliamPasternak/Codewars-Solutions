Return the day
Complete the function which returns the weekday according to the input number: or Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) { 
  if (num > 7 || num < 1) {
    return 'Wrong, please enter a number between 1 and 7'
  }
  
return {
  1: 'Sunday',
  2: 'Monday',
  3: 'Tuesday',
  4: 'Wednesday',
  5: 'Thursday',
  6: 'Friday',
  7: 'Saturday'
}[num]  
  }