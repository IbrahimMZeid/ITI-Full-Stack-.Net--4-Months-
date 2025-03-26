var user_img = document.getElementById("user-img");
var name_span = document.getElementById("name-span");
var visit_span = document.getElementById("visit-span");
window.addEventListener("load", loadData);
var data = {};
function loadData() {
  getData();
  data["visit"] = parseInt(data["visit"]) + 1;
  document.cookie = "visit=" + data["visit"];
  user_img.setAttribute("src", "images/" + data["gender"] + ".jpg");
  name_span.innerText = data["name"];
  name_span.style.color = data["color"];
  visit_span.innerText = data["visit"];
  visit_span.style.color = data["color"];
}
function getData() {
  if (!hasCookie("visit")) {
    location.assign("t1.html");
  } else {
    data = allCookieList();
  }
}

function getCookie(cookieName) {
  var result = "";
  var cookies = document.cookie.split("; ");
  cookies.forEach((co) =>
    co.split("=")[0] == cookieName ? (result = co.split("=")[1]) : ""
  );
  return result;
}
function setCookie(cookieName, cookieValue, expiryDate) {
  document.cookie = cookieName + "=" + cookieValue + ";expires = " + expiryDate;
}
function deleteCookie(cookieName) {
  var myDate = new Date();
  myDate.setDate(myDate.getMonth() - 1);
  document.cookie = cookieName + "=test;expires=" + myDate;
}
console.log(getCookie("age"));
function allCookieList() {
  var result = {};
  var cookies = document.cookie.split("; ");
  cookies.forEach((co) => (result[co.split("=")[0]] = co.split("=")[1]));
  return result;
}
function hasCookie(cookieName) {
  return document.cookie.search(cookieName) == -1 ? false : true;
}
