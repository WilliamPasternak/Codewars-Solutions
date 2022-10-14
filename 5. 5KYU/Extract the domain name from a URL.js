/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
*/
function domainName(fullDomain){
	return fullDomain
    .replace('http://','').replace('https://','').replace('www.','')
    .split('.')[0]
}