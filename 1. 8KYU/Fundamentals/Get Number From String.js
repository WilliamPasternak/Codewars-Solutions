Get number from string
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

function getNumberFromString(s) {
  const digits = ['0','1','2','3','4','5','6','7','8','9']
  return Number(s.split('').filter(x => digits.includes(x)).join(''))
}