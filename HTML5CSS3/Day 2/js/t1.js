var canvas = document.getElementById("canvas-container");
var color = document.getElementById("can-color");
var old_color = color.value;
var rad = 10;
var context = canvas.getContext("2d");
canvas.width = innerWidth * 0.8;
canvas.height = innerHeight * 0.6;

function AddCircles() {
  var count = Math.round(Math.random() * 50);
  if (color.value != old_color) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    old_color = color.value;
    }
    context.strokeStyle = old_color;
  for (var i = 0; i < count; i++) {
    context.beginPath();
    var randX = Math.random() * canvas.width;
    var randY = Math.random() * canvas.height;
    context.arc(randX, randY, rad, 0, Math.PI * 2);
    context.stroke();
  }
}