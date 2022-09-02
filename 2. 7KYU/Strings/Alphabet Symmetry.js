function solve(arr){  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  let final = []
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].toLowerCase() === alphabet[j]) {
        count++;
      }
    }
    final.push(count); 
  }
  return final
};