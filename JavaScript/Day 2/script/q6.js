function Q6() {
  applyOperation(multication, 5, 9);
  applyOperation(divide, 8, 5);
  applyOperation(
    function (num1, num2) {
      return "Addition "+ (num1 + num2);
    },
    5,
    6
  );
  applyOperation(
    function (num1, num2) {
      return "Substraction " + (num1 - num2);
    },
    14,
    6
  );
}
function applyOperation(func, num1, num2) {
  num1 = num1 || 0;
  num2 = num2 || 0;
  document.writeln("<h2>" + func(num1, num2) + "</h2>");
}

function multication(num1, num2) {
  return "Multication "+ (num2 ? (num1 * num2) : num1);
}
function divide(num1, num2) {
  if (!num2) {
    return "Can not be Done";
  }
  return "Dividing "+(num1 / num2);
}

Q6();