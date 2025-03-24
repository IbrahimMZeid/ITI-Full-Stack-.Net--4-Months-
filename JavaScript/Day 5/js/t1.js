var id = 1;
var stdNameAge = []; // array that carry students record
// fields reference
var in1 = document.getElementById("name-input");
var in2 = document.getElementById("age-input");
var spanNameR = document.getElementById("name-required");
var spanNameL = document.getElementById("name-length");
var spanAgeR = document.getElementById("age-required");
var spanAgeL = document.getElementById("age-length");
var table = document
  .getElementById("data-table")
  .getElementsByTagName("tbody")[0];
var add_btn = document.getElementById("add-btn");
var actionStd = document.createElement("td");

//add events
add_btn.addEventListener("click", addStudent);
in1.addEventListener("input", input1Event);
in2.addEventListener("input", input2Event);
// name field check
function input1Event(e) {
  if (in1.value.length > 3) {
    spanNameR.style.display = "none";
    spanNameL.style.display = "none";
    return true;
  } else if (in1.value.length == 0) {
    spanNameR.style.display = "inline";
  } else {
    spanNameR.style.display = "none";
    spanNameL.style.display = "inline";
  }
  return false;
}
// age field check
function input2Event(e) {
  if (in2.value > 18) {
    spanAgeR.style.display = "none";
    spanAgeL.style.display = "none";
    return true;
  } else if (in2.value.length == 0 || in2.value == 0) {
    spanAgeR.style.display = "inline";
  } else {
    spanAgeR.style.display = "none";
    spanAgeL.style.display = "inline";
  }
  return false;
}

// add button on-click event function
function addStudent() {
  if (input1Event() && input2Event()) {
    var tr = document.createElement("tr");
    var idStd = document.createElement("td");
    var nameStd = document.createElement("td");
    var ageStd = document.createElement("td");
    actionStd = document.createElement("td");
    if (!stdNameAge.find((o) => o.name == in1.value && o.age == in2.value)) {
      stdNameAge.push({ name: in1.value, age: in2.value }); // add record to the array
      //add record to table
      idStd.innerHTML = id++;
      nameStd.innerHTML = in1.value;
      ageStd.innerHTML = in2.value;
      actionStd.innerHTML = "Delete Student";
      actionStd.classList.add("delete-btn");
      actionStd.addEventListener("click", deleteStd);
      tr.append(idStd, nameStd, ageStd, actionStd);
      table.append(tr);
    }
  }
}
// delete on-click event function
function deleteStd(e) {
  var parent = e.target.parentElement;
  var std = parent.getElementsByTagName("td");
  var index = stdNameAge.findIndex(
    (o) => o.name == std[1].innerHTML && o.age == std[2].innerHTML // find record in the array to delete it
  );
  stdNameAge.splice(index, 1); // remove record from the array
  parent.remove(); // remove record from the table
}
