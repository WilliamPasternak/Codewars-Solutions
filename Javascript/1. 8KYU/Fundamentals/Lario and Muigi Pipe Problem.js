Lario and Muigi Pipe Problem

Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

function pipeFix(numbers){
  const [start,end] = [numbers[0], numbers[numbers.length - 1]]
  let fixedPipes = []
  for(let i = start; i <= end; i++){
    fixedPipes.push(i)
  }
  return fixedPipes 
}