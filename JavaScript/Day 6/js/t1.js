var name_in = document.getElementById("name-in");
var age_in = document.getElementById("age-in");
var gender_radios = document.getElementsByName("gender");
var color_selects = document.getElementById("color-select");
color_selects.addEventListener("change", selectColor);
window.addEventListener("load", loadFun);
var cookies = document.cookie.split(";");
cookies_list = [];
cookies.forEach((co) =>
  cookies_list.push({ key: co.split("=")[0], value: co.split("=")[1] })
);
function registerData() {
  if (
    name_in.value.length &&
    age_in.value >= 18 &&
    selectColor &&
    selectGender
  ) {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 3);
    document.cookie = "name=" + name_in.value + ";expires=" + expireDate;
    document.cookie = "age=" + age_in.value + ";expires=" + expireDate;
    document.cookie = "visit=0" + ";expires=" + expireDate;
    genderCookie(expireDate);
    colorCookie(expireDate);
    location.assign("profile.html");
  } else alert("Please Enter All Data");
}
function selectGender() {
  for (var gender in gender_radios) {
    if (gender_radios[gender].checked) return true;
  }
}
function selectColor() {
  if (color_selects.value) return true;
}
function genderCookie(expireDate) {
  for (var gender in gender_radios) {
    if (gender_radios[gender].checked)
      document.cookie =
        "gender=" + gender_radios[gender].value + ";expires=" + expireDate;
  }
}
function colorCookie(expireDate) {
  document.cookie = "color=" + color_selects.value + ";expires=" + expireDate;
}
function loadFun() {
  if (document.cookie.search("visit") != -1) location.assign("profile.html");
}
