var names = ["ahmed", "islam", "sandra", "fatma", "ali"];
var rand = getRandom2Values();
document.writeln("<h2>" + names[rand[0]] + "</h2>");
document.writeln("<h2>" + names[rand[1]] + "</h2>");


function getRandom2Values() {
  var rand1 = Math.floor(Math.random() * names.length);
  var rand2;
  do {
    rand2 = Math.floor(Math.random() * names.length);
  } while (rand1 == rand2);
  return [rand1, rand2];
}