//Testing 1-2-3

//Function Declaration
let number = function(array){
  return array.map((element, i) => `${i+1}: ${element}`)
}

//One-Liner
let number = array => array.map((element,i) => `${i+1}: ${element}` )
