Heron's formula

Write function heron which calculates the area of a triangle with sides a, b, and c 

function heron(a, b, c) {
  const s = (a + b + c) / 2
  return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}