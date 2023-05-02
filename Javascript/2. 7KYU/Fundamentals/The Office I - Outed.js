The Office I - Outed

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

function outed(meet, boss){
  let [numEmployees,totalHappiness] = [0,0]
  
  for(let employee in meet){    
    const employeeHappiness = meet[employee]
    employee === boss ? totalHappiness += (employeeHappiness * 2) : totalHappiness += employeeHappiness
    numEmployees++
  }
  
  const avgHapiness = totalHappiness / numEmployees
  return avgHapiness <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}