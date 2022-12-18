//UEFA EURO 2016

function uefaEuro2016(teams, scores){
	// Winner is either team 1 or team 2.
  let winner = scores[0] > scores[1] ? teams[0] : teams[1]
  // If scores are tied, its a draw, if not 'winner' wins.
  return scores[0] === scores[1] 
  ? `At match ${teams[0]} - ${teams[1]}, teams played draw.` 
  : `At match ${teams[0]} - ${teams[1]}, ${winner} won!`
}