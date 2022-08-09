Greet Me
var greet = function(name) {
  name = name.toLowerCase()
  return `Hello ${name[0].toUpperCase()}${name.substring(1)}!`
}