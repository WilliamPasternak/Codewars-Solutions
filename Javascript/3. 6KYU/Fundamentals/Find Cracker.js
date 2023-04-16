function findHack(arr) {
  const badKids = []
  const gradeScores = {'A':30,'B':20,'C':10,'D':5}

  for(let student of arr){
    const [studentName, reportedScore, studentsGrades] = [student[0],student[1],student[2]]
    let calculatedScore = 0
    let allGradesAB = true
  
    studentsGrades.forEach((grade) => {
      if (grade !== 'A' && grade !== 'B') allGradesAB = false
      if (grade in gradeScores) calculatedScore += gradeScores[grade]
    })

    if (studentsGrades.length >= 5 && allGradesAB) calculatedScore += 20
    if (reportedScore != calculatedScore) badKids.push(studentName)
  }
  return badKids
}