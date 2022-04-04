function expressionMatter(a, b, c) {
// given a b c what is the highest value we can achieve using:
  // Addition Multiplication and parenthesis
  // numbers must stay in order
  // A = 2 B = 1 C = 2
  // as long as A =/= 1 use multiplication?
  
  let ABgroupAM = (a + b) * c
  let ABgroupMA = (a * b) + c
  let BCgroupAM = a + (b * c)
  let BCgroupMA = a * (b + c)
  let noGroupM = a * b * c
  let noGroupA = a + b + c
  
  let solutions = [ABgroupAM, ABgroupMA, BCgroupAM,BCgroupMA,noGroupM,noGroupA]
  return Math.max(...solutions)