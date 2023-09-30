House of Cards
Write a program which will count the minimal number of cards according to the number of floors you want to have. For example, if you want a one floor house, you will need 7 of them (two pairs of two cards on the base floor, one horizontal card and one pair to get the first floor).

function houseOfCards(floors){
  if(!(Number.isInteger(floors)) || floors < 1){
    throw new Error('Error')
  }
  return (1.5 * floors + 2) * (floors + 1)
}