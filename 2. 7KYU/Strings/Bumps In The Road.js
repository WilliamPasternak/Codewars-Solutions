Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead


function bump(x){
let road = {}
for(let section of x){
road[section] = (road[section] || 0 ) + 1
}
return road['n'] > 15 ? 'Car Dead' : 'Woohoo!'
}

// Tests:
console.log(bump('___'),'Woohoo!')
console.log(bump('nnnnnnnnnnnnnnnn'),'Car Dead')
console.log(bump('nnnnnnnnnnnnnnn_'),'Woohoo!')
console.log(bump('nnnnnnnnnnnnnnn________________'),'Woohoo!')
