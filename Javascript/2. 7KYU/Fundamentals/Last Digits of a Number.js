Last Digits of a Number

Implement a function which returns the last D digits of an integer N as a list.

function lastDigit(n, d) {
  const number = String(n)
  const lastDigits = number.slice(-d).split('')
  return d <= 0 ? [] : lastDigits.map(digit => Number(digit))
  }