Is the date today

Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

function isToday(date) {
  // Get Today's Date
  let today = new Date() 
  
  // Get Year, Month, Day from Today's Date
  const currentYear = today.getFullYear()
  const currentMonth = today.getMonth()
  const currentDay = today.getDate()
  
  // Get Input Date
  const inputYear = date.getFullYear()
  const inputMonth = date.getMonth()
  const inputDay = date.getDate()
  
  // Check if Today's Date is the same as Input's Date by checking Year, Month, and Day
  return inputYear === currentYear && inputMonth === currentMonth && inputDay === currentDay;
  
}