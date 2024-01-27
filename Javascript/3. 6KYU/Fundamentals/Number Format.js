Number Format
Format any integer provided into a string with "," (commas) in the correct places.

function numberFormat (n) {
  const number = String(Math.abs(n)).split('').reverse()
  const formattedNumber = []
  let digitCount = 0
  for(let i = 0; i < number.length; i++){
    const currentDigit = number[i]
    if(digitCount === 3){
      formattedNumber.push(',')
      digitCount = 0
    }
    formattedNumber.push(currentDigit)
    digitCount++
  }
  const result = formattedNumber.reverse().join('')

  return n < 0 ? `-${result}` : `${result}`
};


// Alternate Solution using built-in methods.
numberFormat = n => n.toLocaleString()