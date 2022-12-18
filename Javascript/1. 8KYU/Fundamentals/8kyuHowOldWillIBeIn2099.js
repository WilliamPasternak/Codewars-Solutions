/*8 kyu How old will I be in 2099?*/
// Params: Year of birth, A year in the Future or Past
// Returns: For Future dates: You are ...year(s) old. 
    //For dates in the past: "You will be born in ... year(s)." 
  //If the year of birth equals the year requested return: "You were born this very year!"

function  calculateAge(birthYear,yearChecked) {
  let age = yearChecked - birthYear
  
  // If the year we are checking is equal to birth year
  if(age === 0){
    return 'You were born this very year!'
  }
   // Year to check is in the future. 
  // Handles grammer.
  else if(age === 1){
    return `You are ${yearChecked - birthYear} year old.`
  }
  
  else if(yearChecked > birthYear){
    return `You are ${yearChecked - birthYear} years old.`
  }
  
 
  
  
  // If year checked is before birth year.
 else if (age === -1){
    return `You will be born in ${(yearChecked - birthYear) * -1} year.`
  }
  else if (yearChecked < birthYear){
    return `You will be born in ${(yearChecked - birthYear) * -1} years.`
  }
  

}

