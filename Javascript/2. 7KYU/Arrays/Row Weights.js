Row Weights
function rowWeights(array){
  let team1Weight = 0
  let team2Weight = 0
  
  for(let i = 0; i < array.length; i++){
    // team2Weight increases for Even Indices
    if( (i + 1) % 2 === 0){
      team2Weight+= array[i]
    }
    // team1Weight increases for Odd Indices, 
    else{
      team1Weight += array[i]
    }
  }
  
  return [team1Weight, team2Weight]
}

