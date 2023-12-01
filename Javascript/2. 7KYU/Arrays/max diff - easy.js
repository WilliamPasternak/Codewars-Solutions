max diff - easy

You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

function maxDiff(list) {
  if (!list || list.length === 0) return 0; 
  list.sort((a, b) => a - b);
  let [min,max] = [list[0],list[list.length - 1]];
  return max - min;
}