Greet Me
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
var greet = function(name) {
  name = name.toLowerCase()
  return `Hello ${name[0].toUpperCase()}${name.substring(1)}!`
}