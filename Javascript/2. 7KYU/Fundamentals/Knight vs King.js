Knight vs King


You put a Knight and a King in the board.
Complete the method that tell us which one can capture the other one.

You are provided with two object array; each contains an integer (the rank, first item) and a string/char (the file, second item) to show the position of the pieces in the chess board.

Return:
"Knight" if the knight is putting the king in check,
"King" if the king is attacking the knight
"None" if none of the above occur



function knightVsKing(knightPosition, kingPosition) {  
  let horizontalPosition = {'A': 1, 'B':2, 'C':3,'D':4, 'E':5,'F':6,'G':7, 'H':8 }
  
  // Give a numerical value to horizontal / x-axis position
  let knightPosX = horizontalPosition[knightPosition[1]]
  let kingPosX = horizontalPosition[kingPosition[1]]
  
  // Determine Piece Distances
  let horizontalDistance = Math.abs(knightPosX - kingPosX)
  let verticalDistance = Math.abs(knightPosition[0] - kingPosition[0])
  
  // King Wins
    // If Knight is within 1 space of King
      if(verticalDistance <= 1 && horizontalDistance <= 1 ) return 'King'
  
  // Knight Wins
    // if King 2 up and 1 over (L or R) OR if King 2 down and 1 over (L or R)
      if(verticalDistance === 2 && horizontalDistance === 1 ||
      verticalDistance === 1 && horizontalDistance === 2) return 'Knight'
  
  // No Winners
  return 'None'
}
