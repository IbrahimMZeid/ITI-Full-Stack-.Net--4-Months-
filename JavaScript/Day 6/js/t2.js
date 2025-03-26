var usersTbody = document.getElementsByTagName("tbody")[0];
var detailsTbody = document.getElementsByTagName("tbody")[1];
var user_details_container =
  document.getElementsByClassName("user-container")[0];

function getAllUsers() {
  usersTbody.innerHTML = "";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var users = JSON.parse(xhr.response);
        users.forEach((user) => {
          createAllUsersRow(user);
        });
      }
    }
  };
}
function createAllUsersRow(user) {
  var id = document.createElement("td");
  var name = document.createElement("td");
  var email = document.createElement("td");
  var action = document.createElement("td");
  var tRow = document.createElement("tr");
  var show_action = document.createElement("span");
  var delete_action = document.createElement("span");
  show_action.addEventListener("click", function () {
    getUser(user);
  });
  delete_action.addEventListener("click", deleteUser);
  id.innerText = user.id;
  name.innerText = user.name;
  email.innerText = user.email;
  show_action.innerText = "details ";
  delete_action.innerText = " delete";
  action.append(show_action, delete_action);
  action.classList.add("view-details");
  show_action.style.color = "green";
  tRow.append(id, name, email, action);
  usersTbody.append(tRow);
}

function deleteUser(e) {
  e.target.parentElement.parentElement.remove();
}
function getUser(user) {
  detailsTbody.innerHTML = "";
  user_details_container.style.display = "block";
  for (var record in user) {
    creatUserDetailsRows(record, user[record]);
  }
}
function creatUserDetailsRows(key, value) {
  var key_td = document.createElement("td");
  var value_td = document.createElement("td");
  var record_row = document.createElement("tr");
  if (typeof value === "object") {
    for (var val in value) {
      var sub_details = document.createElement("p");
      if (typeof value[val] === "object") {
        for (var v in value[val]) {
          var sub = document.createElement("span");
          sub.innerText = v + " : " + value[val][v] + ",";
          sub_details.append(sub);
        }
      } else sub_details.innerText = val + " : " + value[val];
      value_td.append(sub_details);
    }
  } else {
    value_td.innerText = value;
  }
  key_td.innerText = key + " :";
  record_row.append(key_td, value_td);
  detailsTbody.append(record_row);
}
