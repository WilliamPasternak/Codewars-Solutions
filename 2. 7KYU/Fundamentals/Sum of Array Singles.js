Sum of Array Singles

function repeats(arr){
return arr.filter(number => arr.indexOf(number) === arr.lastIndexOf(number))
  .reduce((a,c) => a + c , 0)
}


const repeats = arr => arr.filter(number => arr.indexOf(number) === arr.lastIndexOf(number))
  .reduce((a,c) => a + c , 0) 
