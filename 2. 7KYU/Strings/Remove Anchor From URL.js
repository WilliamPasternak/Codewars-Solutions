Remove anchor from URL

function removeUrlAnchor(url){
  return url.split('#')[0];
}

let removeUrlAnchor = url => url.split('#')[0]