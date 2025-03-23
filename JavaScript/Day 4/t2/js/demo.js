function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// var nav = document.getElementById("navigation");
// var products = document.getElementsByClassName("product");
// var product_rate = document.getElementsByClassName("product-rating");
// var products_body = document.getElementsByClassName("product-body");
// var h3 = document.getElementsByTagName("h3");
// var h4 = document.getElementsByTagName("h4");
// var news = document.getElementsByClassName("newsletter");
// var news_links = news[0].getElementsByTagName("a");
// var color = "#15161D";
// var links = document.links;
// function dark() {
//   nav.style.backgroundColor = color;
//   document.body.style.backgroundColor = color;
//   for (var i = 0; i < links.length; i++) {
//     if (!links[i].parentElement.classList.contains("active"))
//       links[i].style.color = "#fff";
//   }
//   for (var i = 0; i < products.length; i++) {
//     products[i].style.backgroundColor = color;
//     products_body[i].style.backgroundColor = color;
//     var btn = products_body[i].getElementsByClassName("product-btns");
//     for (var j = 0; j < btn.length; j++) {
//       btn[j].style.color = "#fff";
//       }
//       var star = product_rate[i].children;
//       for (var j = 0; j < star.length; j++){
//           star[j].style.backgroundColor = color;
//       }
//   }
//   for (var i = 0; i < h3.length; i++) {
//     h3[i].style.color = "#fff";
//   }
//   for (var i = 0; i < h4.length; i++) {
//     h4[i].style.color = "#fff";
//   }
//   news[0].style.color = "#fff";
//   for (var i = 0; i < news_links.length; i++) {
//     news_links[i].style.backgroundColor = color;
//     }
//     console.log(document.getElementsByClassName("light"));
// }
