Is your period late?

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

function periodIsLate(last, today, cycleLength) {
  // Calculate the time difference in milliseconds
  const milliSecDiff = today.getTime() - last.getTime();
  // Convert milliseconds to days. 
   // 1000 ms per sec, 60 sec per min, 60 min per hour, 24 hour per day
  const daysDiff = milliSecDiff / (1000 * 60 * 60 * 24);
  return daysDiff > cycleLength
}