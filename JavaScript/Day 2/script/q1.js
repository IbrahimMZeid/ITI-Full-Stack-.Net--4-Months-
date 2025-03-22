function Q1() {
  var msg = prompt("Enter a string");
  var answer = msg.match(/e/gi);
  document.writeln(
    "' " + msg + "' Contains 'e' " + (answer ? answer.length : 0) + " times"
  );
}

Q1();