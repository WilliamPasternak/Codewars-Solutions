Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
function reverseNumber(n) {
  // Applies (-) if n is negative, or leaves number alone if positive.
  return Math.sign(n) * Math.abs(n) 
    .toString()
    .split('')
    .reverse()
    .join('')
}


