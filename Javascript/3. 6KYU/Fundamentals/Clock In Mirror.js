/*
Converts 'timeInMirror' to actual time.
@param {string}  timeInMirror - Starting time seen on a clock in a mirror. 
@returns {string} mirroredTime - Actual time on clock.
*/

function WhatIsTheTime(timeInMirror) {
  // Extract hours and minutes as numbers
  const [hours, min] = timeInMirror.split(':').map(Number)
  // Calculate adjusted hours based on mirrored minutes
  const adjustedHours = (min === 0) ? 12 - hours : 11 - hours;
 
  // Format adjusted hours ensuring two digits.
  let formattedHours
  if(adjustedHours === 0){
    formattedHours = '12'
  } 
  else if(adjustedHours === -1){
    formattedHours = '11'
  } 
  else{
    formattedHours = String(adjustedHours).padStart(2, '0')
  }

  // Calculate and format minutes based on mirrored minutes ensuring two digits.
  const adjustedMin = (min === 0) ? '00' : String(60 - min).padStart(2, '0');

  // Construct the formatted time
  const mirroredTime = `${formattedHours}:${adjustedMin}`

  return mirroredTime
}

// Tests
console.log(WhatIsTheTime("06:35"),'05:25')
console.log(WhatIsTheTime("11:59"),'12:01')  
console.log(WhatIsTheTime("12:02"),'11:58') 
console.log(WhatIsTheTime("04:00"),'08:00')  
console.log(WhatIsTheTime("06:00"),'06:00') 
console.log(WhatIsTheTime("12:00"),'12:00') 