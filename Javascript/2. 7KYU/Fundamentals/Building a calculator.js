Building a calculator
The test expects you to provide a Calculator object with the following methods:

Calculator.add()
Calculator.subtract()
Calculator.multiply()
Calculator.divide()

var Calculator = {
  add(a,b){
    return a + b
  },
  subtract(a,b){
    return a - b
  },
  multiply(a,b){
    return a * b
  },
  divide(a,b){
    return b === 0 ? false: a / b
  }
};