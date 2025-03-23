var in1 = document.getElementById("tag-name");
var in2 = document.getElementById("class-name");
var in3 = document.getElementById("id");
var in4 = document.getElementById("name");


function count() {
    var output = document.getElementById("output");
    var tagname = document.getElementsByTagName(in1.value)
    var classname = document.getElementsByClassName(in2.value)
    var id = document.getElementById(in3.value)
    var name = document.getElementsByName(in4.value)
    var txt = "Number of " + in1.value + " : " + tagname.length;
    txt += " Class of " + in2.value + " : " + classname.length;
    txt += " Number of id" + in3.value + " : " + (id ? 1 : 0);
    txt += " Number of name atterbute " + in4.value + " : " + name.length;
    output.value = txt;
    
    
}