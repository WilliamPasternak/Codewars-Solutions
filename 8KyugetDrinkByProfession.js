function getDrinkByProfession(param){
 // clean up the text, compare and return value
  let profession  = param.toLowerCase().split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')
  
  if (profession === 'Jabroni' ) return "Patron Tequila"
  if (profession === 'School Counselor') return "Anything with Alcohol"
  if (profession === 'Programmer') return "Hipster Craft Beer"
  if (profession === 'Bike Gang Member' ) return "Moonshine"
  if (profession === 'Politician') return "Your tax dollars"
  if (profession === 'Rapper') return "Cristal"
  return 'Beer'
  
}
 
 


