Most Likely

Create a function which compares two probabilities, returning true if the first one is most likely otherwise false. For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3. Sample Input: ('1:3','1:2')

function mostLikely(prob1,prob2){
  // Get Numerator and Denomenator from strings
  prob1 = prob1.split(':')
  prob2 = prob2.split(':')
  
  // Calculate Quotient
  let prob1Likelyhood = prob1[0] / prob1[1]
  let prob2likelyhood = prob2[0] / prob2[1]
  
  // Compare Quotients and return highest value
  return prob1Likelyhood > prob2likelyhood ? true : false 
}