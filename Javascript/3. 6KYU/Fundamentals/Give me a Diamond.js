Give me a Diamond
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.


function diamond(n) {
  let result = '';
  
  if (n < 0 || n % 2 === 0) return null
  
  for (let i = 0, stars = 1; i < n; i++) {
    result = result + `${' '.repeat(Math.abs(stars - n) / 2)}${'*'.repeat(stars)}\n`
    stars = (i < Math.floor(n / 2)) ? stars + 2 : stars - 2
  }
  
  return result
}