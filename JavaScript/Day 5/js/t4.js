var txt = document.getElementsByClassName("traffic-text")[0];
var circle = document.getElementById("circle").children;
var indx = 0;
var change = [
  {
    text: "Stop",
    color: "red",
  },
  {
    text: "Ready",
    color: "orange",
  },
  {
    text: "Go",
    color: "Green",
  },
];
function traffic() {
  setInterval(function () {
    indx = (indx + 1) % 3;
    changeTraffic(indx, change[indx].text, change[indx].color);
  }, 1000);
}

function changeTraffic(indx, text, color) {
  txt.innerHTML = text;
  txt.style.color = color;
  for (var i = 0; i < change.length; i++) {
    if (i == indx) {
      circle[i].style.background = color;
    } else {
        circle[i].style.background = "#ccc";
    }
  }
}
traffic();
