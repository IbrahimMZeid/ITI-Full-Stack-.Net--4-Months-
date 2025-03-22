var msg = prompt("Enter Your Msg");
document.writeln("<h2>Before: "+msg+"</h2>");
msg = fstLetterUpper(msg);

document.writeln("<h2>After: " + msg + "</h2>");


function fstLetterUpper(msg) {
  var arr = msg.split(" ");
  for (var i = 0; i < arr.length; i++) {
    var letters = arr[i].split("");
    letters[0] = letters[0].toUpperCase();
    arr[i] = letters.join("");
  }
  return arr.join(" ");
}
