function Q5() {
  var msg = prompt("Enter a string");
  var search = prompt("Enter a character to search for");
  var result = [];
  var index = 0;
  do {
    index = msg.indexOf(search, index + 1);
    if (index != -1) result.push(index);
  } while (index != -1);
  document.writeln(
    "<h2>" +
      (result.length ? "Found '" : "Not Found '") +
      search +
      "' in '" +
      msg +
      "' : " +
      result +
      "</h2>"
  );
}
Q5();