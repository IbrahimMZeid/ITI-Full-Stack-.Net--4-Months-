window.addEventListener("keydown", keyPress);
document.addEventListener("contextmenu", rightClick);

function keyPress(e) {
    var asci = e.key.charCodeAt(0);
    if (asci == 67)
        alert("Ctrl pressed");
    
    else if (asci == 83)
        alert("Shift pressed");
    else
        alert("ASCI code for preesed Key is "+asci);

}

function rightClick(e) {
    e.preventDefault();
}
