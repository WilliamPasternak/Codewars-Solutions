Safen User Input Part I - htmlspecialchars

Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;


function htmlspecialchars(formData) {
  let newStr = formData
  newStr = newStr.replaceAll('&','&amp;')
  newStr = newStr.replaceAll('"','&quot;')
  newStr = newStr.replaceAll('<','&lt;')
  newStr = newStr.replaceAll('>','&gt;')
  return newStr
}