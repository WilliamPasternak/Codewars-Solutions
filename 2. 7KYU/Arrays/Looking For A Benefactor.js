function newAvg(arr, newavg) {
  let currentTotal = arr.reduce((acc,cur) => acc + cur , 0)
 let totalNeeded = newavg * (arr.length +1)
 return totalNeeded - currentTotal
}
