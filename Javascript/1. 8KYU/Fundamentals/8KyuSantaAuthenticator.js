/* 8 kyu
Sleigh Authentication */

function Sleigh(name,password) {}

Sleigh.prototype.authenticate = function(name, password) {
  if (name === 'Santa Claus' && password === "Ho Ho Ho!"){
    return true
  }
  return false
};
