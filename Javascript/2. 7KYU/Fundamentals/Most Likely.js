Most Likely

Create a function which compares two probabilities, returning true if the first one is most likely otherwise false. For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3. Sample Input: ('1:3','1:2')

function mostLikely(prob1,prob2){
  // Get Numerator and Denomenator from strings
  const [numerator1,denominator1] = prob1.split(':')
  const [numerator2,denominator2] = prob2.split(':')
  // Calculate and compare Quotients
  return (numerator1 / denominator1) > (numerator2 / denominator2)
}