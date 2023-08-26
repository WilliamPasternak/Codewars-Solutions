Simple Fun #352: Reagent Formula

We know the rules of confect:
You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

material1 and material2 cannot be selected at the same time
material3 and material4 cannot be selected at the same time
material5 and material6 must be selected at the same time
material7 or  material8 must be selected(at least one, or both)

function isValid(formula) {
  if (!(formula.includes(7)) && !(formula.includes(8))) return false;
  
  formula.sort((a, b) => a - b);
  for (let i = 0; i < formula.length - 1; i++) {
    let currNum = formula[i];
    let nextNum = formula[i + 1];
    
    if (currNum === 1 && nextNum === 2) return false;
    if (currNum === 3 && nextNum === 4) return false;
    if ((currNum === 5 && !formula.includes(6)) || (currNum === 6 && !formula.includes(5))) return false;
  }
  
  return true;
}
