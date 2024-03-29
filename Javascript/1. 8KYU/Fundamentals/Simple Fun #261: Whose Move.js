Simple Fun #261: Whose Move

Two players - "black" and "white" are playing a game. The game consists of several rounds. If a player wins in a round, he is to move again during the next round. If a player loses a round, it's the other player who moves on the next round. Given whose turn it was on the previous round and whether he won, determine whose turn it is on the next round.

function whoseMove(lastPlayer, win) {
 if(win) return lastPlayer
 return lastPlayer === 'white' ? 'black' : 'white'
}

// Tests:
console.log(whoseMove('black', true), 'black')
console.log(whoseMove('black', false), 'white')
console.log(whoseMove('white', true), 'white')
console.log(whoseMove('white', false), 'black')