Data Reverse
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

function dataReverse(data) {
const dataArr = new Array(data.length).fill(0)
for(let i = 0; i < data.length; i++){
	dataArr[i] = data[data.length - 1 - i]
}

return dataArr
}
