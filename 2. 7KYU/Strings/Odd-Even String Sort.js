function sortMyString(S) {
  let evenChars = ""
  let oddChars = ""

  S.split('').forEach((e,i) => {
  if(i % 2 === 0) {
  evenChars += e
}
else{
oddChars += e
}
})
return `${evenChars} ${oddChars}`
}