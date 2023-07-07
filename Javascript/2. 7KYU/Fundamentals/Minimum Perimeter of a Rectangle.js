Minimum Perimeter of a Rectangle

Write a function that, given an area as a positive integer, returns the smallest perimeter possible of a rectangle with integral side lengths.

function minimumPerimeter(area) {
  let perimeters = []
  for(let i = 1; i <= Math.sqrt(area); i++){
    if(area % i === 0){
       let num1 = i
       let num2 = area / i
     
      // If both nums are integers, push their perimeter
      if(Number.isInteger(num1) && Number.isInteger(num2)){
        perimeters.push((num1 + num2) * 2)
      }
    }
  }
  // If no valid rectangles found, exit
  if(perimeters.length === 0) return -1

  // Sort perimeters from smallest to largest
  perimeters.sort((a,b) => a - b)
  // Return the smallest element
  return perimeters[0]
}