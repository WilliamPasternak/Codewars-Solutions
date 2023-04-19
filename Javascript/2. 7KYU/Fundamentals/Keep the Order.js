Keep the Order

Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

function keepOrder(arr, val) {
  for (let i = 0; i < arr.length;i++){
    if(val <= arr[i]) return i
  }
  return arr.length
}