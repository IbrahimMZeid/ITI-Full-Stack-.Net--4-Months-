var values = [1, 2, 3, 4, 5, 1, 5];
var arr = values.slice(0,values.length);

arr.sort();

// arr = Array.from(new Set(arr));
// console.log(arr[1]);
// console.log(arr[arr.length-2]);

var set = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] != set[set.length - 1]) set.push(arr[i]);
}

document.writeln("<h2> values "+values+"</h2>");
document.writeln("<h2> Second Lowest value is " + set[1] + "</h2>");
document.writeln(
  "<h2> Second Greatest value is " + set[set.length - 2] + "</h2>"
);

