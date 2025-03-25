var str =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam esse sit molestiae, velit tenetur placeat sapiente veritatis voluptatibus eligendi. Perspiciatis quas minus quod ab repudiandae sit debitis. In, quam magni?";
var indx = 0;
var end = str.length;
var content = document.getElementById("main");
var interval;
typing();
function typing() {
    interval = setInterval(function () {
        content.innerHTML += str[indx++];
        if (indx == end) {
            clearInterval(interval);
        } 
    },100);
}
