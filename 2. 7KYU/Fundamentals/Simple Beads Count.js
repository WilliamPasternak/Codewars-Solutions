Simple Beads Count
Two red beads are placed between every two blue beads. There are N blue beads. Return the # of red beads. B R R B R R B R R B

function countRedBeads(n) {
 if(n < 2) return 0
 return ( n - 1 ) * 2
}