const padIt = (str, n) => {
  while (n--) str = n % 2 ? str + '*' : '*' + str;
  return str;
}