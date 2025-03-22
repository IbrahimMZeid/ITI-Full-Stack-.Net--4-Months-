function Q7() {
  processArray([1, 2, 3, 4, 5], square);
}
function processArray(array, func) {
  for (var i = 0; i < array.length; i++) {
    document.writeln("<h2>" + func(array[i]) + "</h2>");
  }
}
function square(num) {
  return num * num;
}

Q7();