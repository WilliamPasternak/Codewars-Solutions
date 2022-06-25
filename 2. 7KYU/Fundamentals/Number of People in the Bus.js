Number of People in the Bus
var number = function(busStops){
  let getOn = 0
  let getOff = 0
  
  busStops.forEach(x => {
    getOn += x[0]
    getOff += x[1]    
  })
  
  return getOn - getOff
}