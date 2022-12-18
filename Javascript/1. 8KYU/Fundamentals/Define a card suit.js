Define a card suit
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

function defineSuit(card) {
 if(card[card.length - 1] === '♣') return 'clubs'
 else if(card[card.length - 1] === '♦') return  'diamonds'
 else if(card[card.length - 1] === '♥') return  'hearts'
 else if(card[card.length - 1] === '♠') return  'spades'
 } 


Refactored 
function defineSuit(card) {
  return {
    '♣' : 'clubs',
    '♦' : 'diamonds',
    '♥' : 'hearts',
    '♠' : 'spades'
  }[card.substr(-1)]
}