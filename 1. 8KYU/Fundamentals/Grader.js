Grader
Create a function that takes a number as an argument and returns a grade based on that number.
function grader(score) {
  if(score > 1 || score < 0.6) {return 'F'}
  else if(score >= 0.9) {return 'A'}
  else if (score >= 0.8) {return 'B'}
  else if (score >= 0.7) {return 'C'}
  return 'D'
}