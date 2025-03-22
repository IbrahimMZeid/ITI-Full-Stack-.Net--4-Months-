function Q2() {
  var msg = prompt("Enter a string");
  var sensitive = confirm("Case sensitive?");
  if (!sensitive) {
    msg = msg.toLowerCase();
  }
  console.log(msg);
  var reversed = msg.split("").reverse().join("");
  document.writeln(
    msg + " is " + (msg == reversed ? "" : "not ") + "a palindrome"
  );
}
Q2();