Given an array of strings (strarr) and an integer (k)
Return the first longest string consisting of k consecutive strings taken in the array. 
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).


function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return ""
    const strLengths = strarr.map(string => string.length)
    let left = 0
    let right = k - 1
    let longest = 0
    let mostChars = ""
    
    while(right < strLengths.length){
        let currentLength = strLengths.slice(left,right + 1).reduce((a,b) => a + b)
    if(currentLength > longest){
 	   longest = currentLength
 	   mostChars = strarr.slice(left,right+1).join('')
    }
    left++
    right++
    }
return mostChars
  }
