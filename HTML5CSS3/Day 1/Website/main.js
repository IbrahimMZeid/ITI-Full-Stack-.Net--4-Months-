var category_section = document.getElementsByClassName("category-card");
var offers = document.getElementsByClassName("offer");
var slider = document.getElementsByClassName("slider-container")[0];
var btn1 = document.getElementById("slide1");
var btn2 = document.getElementById("slide2");

window.onscroll = function () {
  if (scrollY > 720) {
    offers[0].style.animation = "fadeInUp 1s forwards";
    offers[1].style.animation = "fadeInUp 1s 0.4s forwards";
    offers[2].style.animation = "fadeInUp 1s 0.8s forwards";
  }
  if (scrollY > 2000) {
    {
      category_section[0].style.animation = "fadeInUp 1s forwards";
      category_section[1].style.animation = "fadeInUp 1s 0.3s forwards";
      category_section[2].style.animation = "fadeInUp 1s 0.6s forwards";
      category_section[3].style.animation = "fadeInUp 1s 0.9s forwards";
    }
  }
};
function slideLeft() {
  slider.style.transform = `translateX(${slider.offsetWidth / -2}px)`;
  btn1.classList.remove("disabled");
  btn2.classList.add("disabled");
}
function slideRight() {
  slider.style.transform = `translateX(0)`; 
  btn1.classList.add("disabled");
  btn2.classList.remove("disabled");
}
window.onscroll(function () {
  console.log(screenY);
});