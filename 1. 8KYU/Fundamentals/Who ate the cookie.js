Who ate the cookie?
 or this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!" 
  
function cookie(x){
  let guilty = ""
  if (typeof x === 'string'){
    guilty = 'Zach'
  }
  else if (typeof x === 'number'){
    guilty = 'Monica'
  }
  else{
    guilty = 'the dog'
  }
  
  return `Who ate the last cookie? It was ${guilty}!`
  
}