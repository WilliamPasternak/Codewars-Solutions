Find Cracker
Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. 

The scores for each grade is:
A: 30 points
B: 20 points
C: 10 points
D: 5 points
Everything else: 0 points
If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Return the name of the hacked name as an array when scoring with this rule.

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