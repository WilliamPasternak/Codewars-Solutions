Color Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

var Ghost = function() {
  let colors = ['white','yellow','purple','red']
  let randomColor = colors[Math.floor(Math.random() * colors.length)]
  this.color = randomColor  
};