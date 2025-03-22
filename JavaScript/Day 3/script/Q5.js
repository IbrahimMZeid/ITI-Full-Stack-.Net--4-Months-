var student = {
  name: "John Doe",
  age: 20,
  grades: {
    math: 90,
    sience: 85,
    literature: 88,
  },
  contactInfo: {
    email: "johndoe@exmple.com",
    phone: "123-456-7890",
  },
};
display(student);

function display(obj) {
  for (var key in obj) {
    if (typeof obj[key] == "object")
      for (var key2 in obj[key]) {
        document.writeln(
          "<h2>" + key + "." + key2 + " : " + obj[key][key2] + "</h2>"
        );
      }
    else document.writeln("<h2>" + key + " : " + obj[key] + "</h2>");
  }
}
