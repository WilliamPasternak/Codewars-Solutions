/* 
8 kyu
Filter out the geese
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
*/


function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let notBirds = []
  
  for (let i = 0; i <= birds.length -1; i++){
    if (geese.includes(birds[i]) === false){
    notBirds.push(birds[i])
  }
   
  }
  return notBirds;
  
};
