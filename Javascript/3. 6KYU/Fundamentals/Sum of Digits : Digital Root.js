Sum of Digits / Digital Root

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Recursive Solution
function digitalRoot(n) {
  if(n < 10) return n
  return digitalRoot(n.toString().split('').reduce((a,b) => a + Number(b) , 0))
}

// O(1) Math solution
function digital_root(n) {
  return (n - 1) % 9 + 1;
}