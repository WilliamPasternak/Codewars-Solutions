Find your caterer

You need to hire a catering company out of three for lunch in a birthday party. 
The first caterer offers only a basic buffet which costs $15 per person. 
The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person.
The third one gives a 20% discount if the number of persons to be served is greater than 60. 
You want to spend the maximum that fits into the budget.
The function takes two arguments denoting the budget in $ and the number of people. 
Return 1, 2 or 3 for the three caterers as per the above criteria. 
Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.


function findCaterer(budget, people){
  if (budget < 15 || people < 1) return -1
  
  // Calculate the cost for most expensive remaining caterer, if it fits in budget, return that caterer's number.
  const caterer3Cost = people > 60 ? people * (30 - (30 * 0.20)) : people * 30
  if(caterer3Cost <= budget) return 3
  
  const caterer2Cost = people * 20
  if(caterer2Cost <= budget) return 2
  
  const caterer1Cost = people * 15
  if(caterer1Cost <= budget) return 1

  // If no caterer fits the budget, return -1
  else return -1
}

// Tests
console.log(findCaterer(200,9) , 2)
console.log(findCaterer(300,9) , 3)