var a = "code";
var b = "wa.rs";
var name = a + b;


/*Short Long Short*/
function solution(a, b){
  return a.length > b.length ? b + a + b : a + b + a
}
