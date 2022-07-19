Sort Numbers
function solution(nums){
if((nums === null) || nums.length < 1) {
  return []
}
  return nums.sort((a,b) => a - b)
}