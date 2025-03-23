var image = document.images[0];
var cnt = 1;

function prev() {
    cnt = (cnt == 1 ?6:cnt-1);
    image.src = ("images/"+cnt+".jpg");
}
function next() {
    cnt = (cnt == 6 ?1:cnt+1);
    image.src = ("images/"+cnt+".jpg");
}