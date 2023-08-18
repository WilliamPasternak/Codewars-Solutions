Closest elevator

Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator which should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

function elevator(left, right, call){
  let [leftDistance,rightDistance] = [Math.abs(call - left), Math.abs(call - right)]
  return leftDistance < rightDistance ? 'left' : 'right'
}