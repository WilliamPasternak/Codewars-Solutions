No oddities here
function noOdds( values ){
let evens = []

values.forEach(x => {
  if(x % 2 === 0){
    evens.push(x)
  }
})
  return evens
  
}
