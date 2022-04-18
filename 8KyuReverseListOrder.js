/*8 kyu
Reverse List Order*/


function reverseList(list) {
  let reversedList = [];
  for( let i = 0; i < list.length ;i++){
    reversedList.unshift(list[i])
  }
  return reversedList;
}