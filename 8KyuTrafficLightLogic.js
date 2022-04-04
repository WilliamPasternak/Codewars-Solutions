/*8 kyu
Thinkful - Logic Drills: Traffic light
Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
*/



function updateLight(current) {
let colors = ['green','yellow','red','green']  
return colors[colors.indexOf(current)+1]
}