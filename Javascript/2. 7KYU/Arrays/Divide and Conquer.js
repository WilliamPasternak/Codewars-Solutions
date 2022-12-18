Divide and Conquer
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

function divCon(x){
  let sumStrings = 0
  let sumInts = 0
  x.forEach(num => {
	if(typeof(num) === 'string'){
       sumStrings += +num
      }
	else{
	sumInts += num
}
  })
	return sumInts - sumStrings
}