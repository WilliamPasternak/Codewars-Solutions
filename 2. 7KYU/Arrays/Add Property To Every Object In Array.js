Add property to every object in array
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

for(let question of questions){
    question.usersAnswer = null
  }