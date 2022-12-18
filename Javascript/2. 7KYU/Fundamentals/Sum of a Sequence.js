const sequenceSum = (begin, end, step) => {
  let sum = 0;
  for(var i=begin;i<=end;i+=step){
    sum += i;
  }
  return sum;
};