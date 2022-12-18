function findNextSquare(sq) {
 if(Number.isInteger(Math.sqrt(sq)) === false){
	return -1
}
while(!Number.isInteger( Math.sqrt(sq + 1))){
	sq +=1
}
return sq + 1

}