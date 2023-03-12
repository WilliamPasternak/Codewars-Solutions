Directions Reduction

Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

function dirReduc(arr){
  
  const directions = {
    "NORTH": "SOUTH",
    "EAST": "WEST",
    "SOUTH": "NORTH",
    "WEST": "EAST"
  }
  
  const newDirections = []
  for (let i = 0; i < arr.length; i++) {
    const currentDirection = directions[arr[i]]
    const lastDirection = newDirections.length-1
    
     newDirections[lastDirection] === currentDirection ?
      newDirections.pop(): newDirections.push(arr[i])
    }
    
    return newDirections
  }