// 4/30/22

//Reverse Meerkat
function fixTheMeerkat(arr) {
 return arr.reverse()
}

//8 kyu Find numbers which are divisible by given number
function divisibleBy(numbers, divisor){
return numbers.filter(x => x % divisor === 0)
}

// 8 kyu Stringy Strings
function stringy(size) {
  let binary = ''
  for(let i = 1; i <= size; i++){
    if(i % 2 === 0){
      binary += 0
    }
    else if(i % 2 != 0){
       binary += 1
    }
   
  }
  return binary
}

//8 kyu Grasshopper - If/else syntax debug

function checkAlive (health) {
  return health > 0
  }

// 8Kyu Get nth even number
const nthEven = n => (n * 2) -2
