console.log("========= Fibonacci maxValue =========");
function* fibonacciMax(maxValue) {
  let [a, b] = [0, 1];
  while (a < maxValue) {
    yield a;
    [a, b] = [b, a + b];
  }
}
for (let value of fibonacciMax(10)) {
  console.log(value);
}


console.log("=========  Fibonacci Length ==========");
function* fibonacciLength(length) {
  let [a, b] = [0, 1];
  for (let i = 0; i < length; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}
for (let value of fibonacciLength(10)) {
  console.log(value);
}
