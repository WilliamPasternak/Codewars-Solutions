Improving Math.round(x)

Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:

 Math.roundTo = function (number, precision) {
  const multiplier = 10 ** precision;
  const roundedNumber = Math.round(number * multiplier) / multiplier;

  return roundedNumber;
};
