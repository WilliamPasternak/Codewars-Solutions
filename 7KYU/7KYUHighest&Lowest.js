7KYUHighest&Lowest.js

function highAndLow(numbers){
  let justNumbers = numbers.split(' ')
  return `${Math.max(...justNumbers)} ${Math.min(...justNumbers)}`
}