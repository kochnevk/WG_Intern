var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var max = new Image();
max.src = "img/healls.png";

function draw (){
    ctx.drawImage(max, 0, 0);
}

max.onload = draw;