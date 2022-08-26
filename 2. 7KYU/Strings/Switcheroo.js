Switcheroo
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.


function switcheroo(x){
  let result = []
  for(let i=0; i<x.length; i++){
    if(x[i] == 'a') result.push('b')
    if(x[i] == 'b') result.push('a')
    if(x[i] == 'c') result.push('c')
  }
  return result.join('')
}