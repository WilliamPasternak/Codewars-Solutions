I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

function nthFibo(n) {
  if(n === 1) return 0
  if(n === 2) return 1
  return nthFibo(n - 1) + nthFibo(n - 2);
}