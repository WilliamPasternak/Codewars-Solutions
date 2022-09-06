function generateShape(n){
let square = ""
let line = '+'.repeat(n) + '\n'

for(let i = 0; i < n; i++){
square += line
}
return square.trim()
}