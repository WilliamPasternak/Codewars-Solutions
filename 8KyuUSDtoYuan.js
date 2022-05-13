/* 8 kyu USD => CNY */

function usdcny(usd) {
  let yuan = (usd * 6.75)
  return `${yuan.toFixed(2)} Chinese Yuan`
}