/*8 kyu
Hello, Name or World!*/


function hello(name = "") {
  if (name){
     let lowerCase = name.toLowerCase().split('')
     lowerCase[0] = lowerCase[0].toUpperCase()
     return `Hello, ${lowerCase.join('')}!`
  }
 return "Hello, World!"
}