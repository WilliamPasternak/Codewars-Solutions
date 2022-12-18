Thinkful - Number Drills: Blue and red marbles
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
let remainingMarbles = (blueStart + redStart) - bluePulled - redPulled
let remainingBlue = blueStart - bluePulled
return remainingBlue / remainingMarbles
}