var radius = parseInt(prompt("What is the value of a circle's radius "));
alert("Total area of the circle is " + Math.PI * Math.pow(radius, 2));

var sRoot = parseInt(
  prompt("What is the value you eant to calculate its square root ")
);
alert("The square root of " + sRoot + " is " + Math.sqrt(sRoot));

var angle = parseInt(
  prompt("What is the angle you eant to calculate its cos value ")
);
document.writeln(
  "<h2>cos " + angle + " is " + Math.cos((angle * Math.PI) / 180) + "</h2>"
);
