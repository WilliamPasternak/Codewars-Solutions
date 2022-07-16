function printerError(s) {
  let numCorrect = 0
  
  for(let i = 0; i < s.length; i++){
    if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 109){
      numCorrect++
    }
  }
  
  return `${s.length - numCorrect}/${s.length}`
}
