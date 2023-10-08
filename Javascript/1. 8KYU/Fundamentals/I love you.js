 I love you, a little , a lot, passionately ... not at all

 Your goal in this kata is to determine which phrase said at the last petal for a flower of a given number of petals. The number of petals is always greater than 0

 function howMuchILoveYou(nbPetals) {
  const responses = ['I love you','a little','a lot', 'passionately','madly','not at all']
  return responses[(nbPetals - 1) % responses.length]
}
