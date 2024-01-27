Number Format
Format any integer provided into a string with "," (commas) in the correct places.

/**
 * Format a number by adding commas as thousand separators.
 * @param {number} n - The number to be formatted.
 * @returns {string} - The formatted number as a string.
 */
function numberFormat(n) {
  // Get the absolute value of the number, convert it to a string, split it into an array, and reverse the array
  const absoluteNumber = Math.abs(n).toString().split('').reverse()
  // Array to store the formatted number
  const formattedNumber = []

  // Iterate through each digit of the reversed absolute number
  for (let i = 0; i < absoluteNumber.length; i++) {
    // Add a comma after every third digit, except for the first set of digits
    if (i > 0 && i % 3 === 0) {
      formattedNumber.push(',')
    }
    // Add the current digit to the formattedNumber array
    formattedNumber.push(absoluteNumber[i])
  }

  // Reverse the formattedNumber array and join its elements into a string
  const result = formattedNumber.reverse().join('')

  // Add a minus sign if the original number was negative, otherwise return the positive result
  return n < 0 ? `-${result}` : result
}

// Use built-in method:
numberFormat = n => n.toLocaleString()