Who Took The Car Key?

Given an array of binary numbers, figure out and return the culprit's message to find out who took the missing car key.

function whoTookTheCarKey(message) {
  return message.map(binary => String.fromCharCode(parseInt(binary,2))).join('')
}

const whoTookTheCarKey = (message) => message.map(binary => String.fromCharCode(parseInt(binary,2))).join('')