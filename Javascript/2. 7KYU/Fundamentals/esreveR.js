Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
reverse = function(array) {
  const reversedArray = []
  array.forEach(element => reversedArray.unshift(element))
  return reversedArray
}