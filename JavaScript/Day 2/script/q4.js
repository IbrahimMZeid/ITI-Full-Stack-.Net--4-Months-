function Q4() {
  var numArr = [];
  for (var i = 0; i < 5; i++) {
    numArr.push(parseInt(prompt("Enter a number " + (i + 1))));
  }

  document.writeln("<h1>Sorting</h1><hr>");
  document.writeln("<h2>you've entered the values of " + numArr + "</h2>");

  numArr.sort(function (a, b) {
    return b - a;
  });
  document.writeln(
    "<h2>your values after being descending " + numArr + "</h2>"
  );
  numArr.reverse();
  document.writeln("<h2>your values after being ascending " + numArr + "</h2>");
}
Q4();