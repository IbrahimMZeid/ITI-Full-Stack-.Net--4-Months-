function Q3() {
  var num = [];
  var sum = 0,
    mul = 1;
  for (var i = 0; i < 3; i++) {
    num.push(parseInt(prompt("Enter a number " + (i + 1))));
  }
  for (var i = 0; i < num.length; i++) {
    sum += num[i];
    mul *= num[i];
  }
  document.writeln("<h1> Adding -- Multiplying -- Dividing 3 values</h1><hr>");
  document.writeln(
    "<h2 style='color:red'>sum of the 3 values " +
      num[0] +
      " + " +
      num[1] +
      " + " +
      num[2] +
      " = " +
      sum +
      "</h2>"
  );
  document.writeln(
    "<h2 style='color:red'>multication of the 3 values " +
      num[0] +
      " * " +
      num[1] +
      " * " +
      num[2] +
      " = " +
      mul +
      "</h2>"
  );
  document.writeln(
    "<h2 style='color:red'>dividing of the 3 values " +
      num[0] +
      " / " +
      num[1] +
      " / " +
      num[2] +
      " = " +
      (num[1] && num[2] ? divide(num) : "Can not divide by 0") +
      "</h2>"
  );
}
function divide(num) {
  var result = num[0];
  for (var i = 1; i < num.length; i++) {
    result = result / num[i];
  }
  return result;
}

Q3();
