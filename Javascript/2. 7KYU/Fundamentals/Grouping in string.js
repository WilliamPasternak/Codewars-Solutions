Grouping in string

In this kata you have to find whether same elements of the string are grouped together.

function isConsecutive(str){
    let nums = str.split('')
    let numsSeen = new Set()
    
    for(let i = 0; i < nums.length -1; i++){
      if(nums[i] !== nums[i + 1]){
        if(numsSeen.has(nums[i])){
           return false
           }
        numsSeen.add(nums[i])
      }
    }
   return true
}

