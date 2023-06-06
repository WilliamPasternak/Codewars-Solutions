Aspect Ratio Cropping

function aspectRatio(x,y){
 let newX = (y / 9) * 16
 return [Math.ceil(newX),y]
}