Does my number look big in this?
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

The Challenge:
Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.


function narcissistic(number) {
  // Find the length of the number , the length of number is power
  const power = number.toString().length
  // Raise each number to above power 
  const narcissisticNumber = number
                            .toString()
                            .split('')
                            .map((digit) => digit**power)
                            .reduce((a,b) => a + b)
  // return does sum of that equal value
  return number === narcissisticNumber
}