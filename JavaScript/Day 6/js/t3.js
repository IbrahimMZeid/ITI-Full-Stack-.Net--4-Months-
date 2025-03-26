onlyTwoParameters(5, "dummy");
// onlyTwoParameters(5);

console.log(numberSum(5, 6, 10));
// console.log(numberSum(5, "dummy"));
// console.log(numberSum());


function onlyTwoParameters() {
  if (arguments.length != 2)
    throw new Error("Only Two Parameters are available");
  else console.log(arguments[0] + ", " + arguments[1]);
}

function numberSum() {
  var sum = 0;
  if (arguments.length == 0) throw new Error("Can not add zero parameters");
  else {
    for (var arg in arguments) {
      if (!isNaN(arguments[arg])) sum += parseInt(arguments[arg]);
      else throw new Error("Can not get sum of NaN values");
    }
  }
  return sum;
}
