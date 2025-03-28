var svg = document.getElementsByTagName("svg")[0];
svg.addEventListener("mousemove", function (e) {
    console.log(e.clientX, e.clientY);
});