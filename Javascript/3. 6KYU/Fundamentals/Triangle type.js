Triangle type
In this kata, you should calculate the type of triangle with three given sides a, b and c (given in any order).

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/

function triangleType(a, b, c){
  // Sort the sides in ascending order
  const sides = [a, b, c].sort((a, b) => a - b);
  
  // Check if the sides form a valid triangle
  if (sides[0] + sides[1] <= sides[2]) return 0;

  // Check if the triangle is acute
  if (sides[0] ** 2 + sides[1] ** 2 > sides[2] ** 2) return 1;

  // Check if the triangle is a right triangle
  if (sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2) return 2;

  // If none of the above conditions are met, it's an obtuse triangle
  return 3;
}