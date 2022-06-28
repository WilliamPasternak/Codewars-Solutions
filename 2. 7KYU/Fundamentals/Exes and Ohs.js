Exes and Ohs

function XO(str) {
  str = str.toLowerCase()
  let x = 0
  let o = 0
  for (let i = 0; i < str.length; i++){
    if(str.charAt(i) === 'x'){
       x++
    }
    else if(str.charAt(i) === 'o'){
       o++
    }
    
  }
    
   return x === o 
}

  

 