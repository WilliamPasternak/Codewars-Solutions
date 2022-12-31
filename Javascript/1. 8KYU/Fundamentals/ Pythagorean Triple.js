Pythagorean Triple
Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.

function isPythagoreanTriple(integers) {
  const [a,b,c] = integers.sort((a,b) => a - b)
  return a**2 + b**2 === c**2
}