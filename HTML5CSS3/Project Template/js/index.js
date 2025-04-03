var preloader = document.getElementsByClassName("preloader")[0];
var hero_content = document.getElementsByClassName("hero-content")[0];
var hero_head = hero_content.getElementsByTagName("h1")[0];
var hero_span = hero_content.getElementsByTagName("span")[0];
window.onload = function () {
  setTimeout(function () {
    preloader.style.transition = "opacity 0.4s ease";
    preloader.style.opacity = "0";
    hero_head.style.animation = "fadeInUp 1s forwards";
    hero_span.style.animation = "fadeInUp 1s 0.1s forwards";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 400);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, 1000);
};

var header = document.getElementsByTagName("header")[0];
var offers = document.getElementsByClassName("offer");
var offer_content = document.getElementsByClassName("main-content")[0].children;
var history_section = document.getElementsByClassName("history-section")[0];
var history_video = history_section.getElementsByClassName("video")[0];
var history_content =
  history_section.getElementsByClassName("content")[0].children;
var feedback_header =
  document.getElementsByClassName("feedback-heading")[0].children;
var location_content = document.getElementsByClassName("location-content")[0];
var location_img = document.getElementsByClassName("location-img")[0];
var testimonia_header = document
  .getElementsByClassName("testimonia-section")[0]
  .getElementsByTagName("h2")[0];
var testimonia_slider = document.getElementsByClassName("testimonia-slider")[0];
var footer_content = document.getElementsByClassName("footer-content")[0];
var scroll_to_top = document.getElementsByClassName("to-upbtn")[0];
window.onscroll = function () {
  if (scrollY > 200) {
    scroll_to_top.style.display = "inline";
    setTimeout(function () {
      scroll_to_top.style.opacity = 1;
    }, 1000);
  } else {
    scroll_to_top.style.opacity = 0;
    setTimeout(function () {
      scroll_to_top.style.display = "none";
    }, 1000);
  }
  if (scrollY > 250) {
    header.classList.add("fixed-bar");
  } else {
    header.classList.remove("fixed-bar");
  }
  if (scrollY > 270) {
    offer_content[0].style.animation = "fadeInUp 1s forwards";
    offer_content[1].style.animation = "fadeInUp 1s 0.1s forwards";
  }
  if (scrollY > 550) {
    var delay = 0;
    for (var i = 0; i < offers.length; i++) {
      offers[i].style.animation = `fadeInUp 1s ${delay}s forwards`;
      delay += 0.3;
    }
  }
  if (scrollY > 1300) {
    history_video.style.animation = "fadeInLeft 1s forwards";
    history_content[1].style.animation = "fadeInRight 1s forwards";
    history_content[0].style.animation = "fadeInRight 1s 1s forwards";
  }
  if (scrollY > 1900) {
    feedback_header[0].style.animation = "fadeInUp 1s forwards";
    feedback_header[1].style.animation = "fadeInUp 1s 0.1s forwards";
  }
  if (scrollY > 2900) {
    location_content.style.animation = "fadeInLeft 1s forwards";
    location_img.style.animation = "fadeInRight 1s forwards";
  }
  if (scrollY > 3600) {
    testimonia_header.style.animation = `fadeInUp 1s forwards`;
    testimonia_slider.style.animation = `fadeInUp 1s 0.5s forwards`;
  }
  if (scrollY > 4300)
    footer_content.style.animation = `fadeInRight 1.5s forwards`;
  //4100
};
var img_slider = document.getElementsByClassName("img-slider")[0];
var slide_cnt = 0;
var img_num = document.getElementsByClassName("img-num")[0].children;
function next() {
  slide_cnt = Math.min(slide_cnt + 1, 5);
  numberStyling(slide_cnt);
  img_slider.style.transform = `translateX(${
    (img_slider.offsetWidth / -6) * slide_cnt
  }px)`;
}
function prev() {
  slide_cnt = Math.max(slide_cnt - 1, 0);
  numberStyling(slide_cnt);
  img_slider.style.transform = `translateX(${
    (img_slider.offsetWidth / -6) * slide_cnt
  }px)`;
}

function imgNum(e) {
  slide_cnt = e.target.value - 1;
  numberStyling(slide_cnt);
  img_slider.style.transform = `translateX(${
    (img_slider.offsetWidth / -6) * slide_cnt
  }px)`;
}
function numberStyling(value) {
  for (var i = 0; i < img_num.length; i++) {
    if (value == i) img_num[i].classList.add("selected-img");
    else img_num[i].classList.remove("selected-img");
  }
}
var slider = document.getElementsByClassName("slider")[0];
function slideShow(value) {
  slider.style.transform = `translateX(${slider.offsetWidth * -0.5 * value}px)`;
}

function goToTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}
