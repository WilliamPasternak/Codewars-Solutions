Training JS #29: methods of arrayObject---concat() and join()

Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

And then sort array in descending order.

Finally, use the separator ">" to connect the elements into a string.

function bigToSmall(arr){
  let flatArr = arr.flat()
  return flatArr.sort((a,b) => b - a).join('>')
}