Is the string uppercase?

Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
    for(let i = 0; i < this.length; i++){
      if(this[i] !== this[i].toUpperCase()) return false
    }
  return true
}
