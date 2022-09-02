function solve(arr){  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  let arrayOfCorrectPosition = []
  for (let i = 0; i < arr.length; i++) {
    let countOfCorrectPosition = 0
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].toLowerCase() === alphabet[j]) {
        countOfCorrectPosition++;
      }
    }
    arrayOfCorrectPosition.push(countOfCorrectPosition); 
  }
  return arrayOfCorrectPosition
};