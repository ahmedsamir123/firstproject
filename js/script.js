function HoverButton() {
    document.getElementById("btn").style.backgroundColor = "#00BCBA";

}

function HoverOut() {
    document.getElementById("btn").style.backgroundColor = "#fff";
}
// magna section
function Show() {
    document.getElementById("Click").style.visibility = "visible";
}
function Hide() {
    document.getElementById("Click").style.visibility = "hidden";

}

function removed() {
    document.getElementById("photo").style.visibility = "hidden";
}
function showed() {
    document.getElementById("photo").style.visibility = "visible";
}
function clc() {
    document.getElementById("clicks").style.color = "#000";
    document.getElementById("clicks").style.textDecoration = "underline";
    
}
function clc2() {
    document.getElementById("clicks").style.color = "#888";
    document.getElementById("clicks").style.textDecoration = "none";
    
}
function valid() {
   var t =  prompt("Name...");
   if (t == "ahmed") {
       window.location = "index.html";
   } else {
       alert("wrong")
   }
}
