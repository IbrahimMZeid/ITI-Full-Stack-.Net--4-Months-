var country_select = document.getElementById("country-select");
country_select.addEventListener("change", function () {
  getPostion(country_select.value);
});
window.addEventListener("load", function () {
  getPostion(country_select.value);
});
function getPostion(countryName) {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://nominatim.openstreetmap.org/search?format=json&q=${countryName}`
  );
  request.send();
  request.onload = function () {
    var data = JSON.parse(request.response);
    console.log(request.response);
    initMap(parseInt(data[0].lat), parseInt(data[0].lon));
  };
}

function initMap(d_lat, d_lng) {
  const myLatLng = { lat: d_lat, lng: d_lng };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}

window.initMap = initMap;
