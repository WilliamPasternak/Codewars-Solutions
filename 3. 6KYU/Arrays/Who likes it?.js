Who likes it?

function likes(names) {
  let response = ''
  const likes = names.length;
  if(likes === 0) response = 'no one likes this'
  else if(likes === 1 ) response = `${names[0]} likes this`
  else if(likes === 2) response = `${names[0]} and ${names[1]} like this`
  else if(likes === 3) response = `${names[0]}, ${names[1]} and ${names[2]} like this`
  else response = `${names[0]}, ${names[1]} and ${likes - 2} others like this`
  return response
}