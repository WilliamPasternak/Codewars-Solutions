Find the divisors!

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' 

function divisors(integer) {
  const divs = []
  for(let i = 2; i < integer; i++){
    if (integer % i === 0) divs.push(i)
  }
  return divs.length ?  divs.sort((a,b) => a - b) : `${integer} is prime`
};