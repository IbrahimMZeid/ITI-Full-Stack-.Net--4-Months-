// get reference for all inputs fields
var name_in = document.getElementById("name-in");
var email_in = document.getElementById("email-in");
var pass_in = document.getElementById("pass-in");
var gender = document.getElementsByName("gender");
var sports = document.getElementsByName("sport");
var country = document.getElementById("country-select");
// add event listener for input fields
name_in.addEventListener("input", nameChange);
email_in.addEventListener("input", emailChange);
pass_in.addEventListener("input", passChange);
gender.forEach((gender) => gender.addEventListener("change", genderChange));
sports.forEach((sport) => sport.addEventListener("change", sportChange));
country.addEventListener("change", countryChange);

function submitData() {
  if (
    nameChange() &&
    emailChange() &&
    passChange() &&
    genderChange() &&
    sportChange() &&
    countryChange()
  ) {
    resetFields();
    alert("Submited Suceccfully");
  }
}

function resetFields() {
  name_in.value = "";
  email_in.value = "";
  pass_in.value = "";
  for (var gen in gender) gender[gen].checked = false;

  for (var sport in sports) sports[sport].checked = false;
  country[0].selected = true;
}

function nameChange() {
  var name_span = document.getElementById("name-span");
  if (name_in.value.length == 0) {
    name_span.style.display = "inline-block";
    return false;
  } else {
    name_span.style.display = "none";
  }
  return true;
}

function emailChange() {
  var email_span = document.getElementById("email-span");
  var rgx = /[a-zA-Z0-9]{3,}@[a-z]{3,}.com/g;
  if (!rgx.test(email_in.value)) {
    email_span.style.display = "inline-block";
    return false;
  } else {
    email_span.style.display = "none";
  }
  return true;
}

function passChange() {
  var pass_span = document.getElementById("pass-span");
  if (pass_in.value.length < 8) {
    pass_span.style.display = "inline-block";
    return false;
  } else {
    pass_span.style.display = "none";
  }
  return true;
}

function genderChange() {
  var gender_span = document.getElementById("gender-span");
  for (indx in gender) {
    if (gender[indx].checked) {
      gender_span.style.display = "none";
      return true;
    }
  }
  gender_span.style.display = "inline-block";
  return false;
}

function sportChange() {
  var sport_span = document.getElementById("sport-span");
  var cnt = 0;
  for (var sport in sports) {
    if (sports[sport].checked) cnt++;
  }
  if (cnt < 2) {
    sport_span.style.display = "inline-block";
    return false;
  }
  sport_span.style.display = "none";
  return true;
}

function countryChange() {
  var country_span = document.getElementById("country-span");
  for (con in country) {
    if (country[con].selected) {
      country_span.style.display = "none";
      return true;
    }
  }
  country_span.style.display = "inline-block";
  return false;
}
