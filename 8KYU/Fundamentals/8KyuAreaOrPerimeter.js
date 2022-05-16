/* 8 kyu
Area or Perimeter
If it is a square, return its area. If it is a rectangle, return its perimeter.
*/

const areaOrPerimeter = function(l , w) {
  if (l === w){
    return l * w
  }
  return (2*l) + (2*w)
};