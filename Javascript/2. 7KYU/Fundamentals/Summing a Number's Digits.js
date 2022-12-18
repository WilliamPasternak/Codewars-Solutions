function sumDigits(number) {
  if(number < 0){
    number *= -1
  }
   return number
   		.toString()
   		.split('')
   		.map(x => Number(x))
   		.reduce((a,b) => a + b )
}


