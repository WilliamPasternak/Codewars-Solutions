Check the exam
function checkExam(array1, array2) {
  let studentScore = 0

  for(let i = 0 ; i < array1.length; i++){
    if(array1[i] === array2[i]){
      studentScore += 4
    }
    else if(array1[i] !== array2[i] && array2[i] !== ''){
        studentScore -= 1
      }
    }
  return studentScore > 0 ? studentScore : 0
  }