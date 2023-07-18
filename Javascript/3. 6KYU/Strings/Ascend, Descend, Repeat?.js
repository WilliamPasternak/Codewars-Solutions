Ascend, Descend, Repeat?

You are given three integer inputs: length, minimum, and maximum.
Return a string that:
Starts at minimum
Ascends one at a time until reaching the maximum, then
Descends one at a time until reaching the minimum
repeat until the string is the appropriate length

function ascendDescend(length, minimum, maximum) {
  if (maximum < minimum || length === 0) {
    return "";
  }
  
  if (minimum === maximum) {
    return `${minimum}`.repeat(length)
  }

  let str = [minimum];
  let ascending = true;

  while (str.length < length) {
    const prevNum = str[str.length - 1];
    const nextNum = ascending ? prevNum + 1 : prevNum - 1;

    str.push(nextNum);

    if (nextNum === maximum || nextNum === minimum) {
      ascending = !ascending;
    }
  }
  
  return str.slice(0, length).join("").slice(0, length);
}