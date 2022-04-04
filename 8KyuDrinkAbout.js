/* 
8 kyu
Drink about
Make a function that receive age, and return what they drink.
*/

function peopleWithAgeDrink(old) {
  let drink;
  if(old<14){
    drink = "toddy"
  }
  else if(old > 14 && old <18){
    drink = "coke"
  }
  else if(old > 18 && old < 21){
    drink = "beer"
  }
  else {
    drink = "whisky"
  }
  
  return `drink ${drink}`
};