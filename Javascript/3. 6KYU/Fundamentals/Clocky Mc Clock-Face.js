Clocky Mc Clock-Face

Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. 
Round down to the nearest minute.

function whatTimeIsIt(angle) {
  let hour, minutes;

  // Calculate Hours:
  hour = Math.floor(angle / 30);
  if (hour === 0) hour = 12;

  // Calculate Minutes:
  const fractionOfHour = (angle % 30) / 30; // Fraction of the hour the angle represents
  minutes = Math.floor(fractionOfHour * 60);

  // Format the hour and minutes with leading zeros if necessary
  hour = hour.toString().padStart(2, '0');
  minutes = minutes.toString().padStart(2, '0');

  return `${hour}:${minutes}`;
}

// Tests:
console.log(whatTimeIsIt(0), '12:00');   
console.log(whatTimeIsIt(30),'01:00');   
console.log(whatTimeIsIt(90),'03:00');   
console.log(whatTimeIsIt(180),'06:00');  
console.log(whatTimeIsIt(360),'12:00');  
