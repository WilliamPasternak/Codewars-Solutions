Binary Representation of an Intege

Write a function that returns an array with each element representing one bit of a 32 bit integer in such a way that if printed it would appear as the binary representation of the integer (Least Significant Bit on the right).

function showBits(n) {
  const binary = [];

  for (let i = 0; i < 32; i++) {
    binary.unshift(n & 1); 
    n >>= 1; 
  }

  return binary;
}
