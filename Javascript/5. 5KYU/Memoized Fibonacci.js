Memoized Fibonacci

const memo = {}
function fibonacci(n) {
  if (n < 2)
    return n;
  else if(memo[n]){
    return memo[n]
  }
  else{
    let result = fibonacci(n - 1) + fibonacci(n - 2)
    memo[n] = result
    return result
  }
}
