let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let red = new Image();
let green = new Image();
let blue = new Image();
let max = new Image();
let bg = new Image();

let maxX = 0;
let mouseX = 0;
let mouseY = 0;
let isBreak = false;

red.src = "img/red50x63.png";
green.src = "img/gr50x60.png";
blue.src = "img/bl50x61.png";
max.src = "img/max.png";
bg.src = "img/kira.png";

cvs.addEventListener("click", function(e){
    maxX += 25;
    mouseX = e.clientX;
    mouseY = e.clientY;
    //alert(mouseX + " " + mouseY);
    move();
})

function move (){
    for (let i=0; i < map.length; i++) {
        if (isBreak) {
            isBreak = false;
            break;
        }  
        for (let j=0; j < map[i].length; j++){
            if( mouseX < (map[i][j].x) + 50) 
                if (mouseY < (map[i][j].y) + 50) {
                   // alert("We Here!" + map[i][j].x + " " + map[i][j].y );
                    isBreak = true;
                    break;
                }
        }
    }
}

function draw (){
    //Очистка
    ctx.clearRect(0,0,canvas.width,canvas.height);

    /*for (let i=0; i < map.length; i++) {
        for (let j=0; j < map[i].length; j++){
            if(map[i][j].clr == "R") ctx.drawImage(red, map[i][j].x, map[i][j].y);
            else if(map[i][j].clr  == "G") ctx.drawImage(green, map[i][j].x, map[i][j].y);
            else if(map[i][j].clr  == "B") ctx.drawImage(blue, map[i][j].x, map[i][j].y);
        }  
    }*/

    for (let i=0; i < map.length; i++) {
        for (let j=0; j < map[i].length; j++){
            /*if(map[i][j].clr == "R") {
                ctx.strokeStyle  = "red";
                ctx.strokeRect(map[i][j].x, map[i][j].y, 50, 50);
            }
            else if(map[i][j].clr  == "G") {
                ctx.strokeStyle  = "green";
                ctx.strokeRect(map[i][j].x, map[i][j].y, 50, 50);
            }
            else if(map[i][j].clr  == "B") {
                ctx.strokeStyle  = "blue";
                ctx.strokeRect(map[i][j].x, map[i][j].y, 50, 50);
            }
            else*/
            switch (map[i][j].clr) {
                case "R" :
                    ctx.strokeStyle  = "red";
                    ctx.strokeRect(map[i][j].x, map[i][j].y, 50, 50);
                   break;

                case "G" :
                    ctx.strokeStyle  = "green";
                    ctx.strokeRect(map[i][j].x, map[i][j].y, 50, 50);
                   break;

                case "B" :
                    ctx.strokeStyle  = "blue";
                    ctx.strokeRect(map[i][j].x, map[i][j].y, 50, 50);
                    break;
                case "Bl" :
                    ctx.fillStyle = "black";
                    ctx.fillRect(map[i][j].x, map[i][j].y, 50, 50);
                    break;
                default :
                    ctx.strokeStyle  = "gray";
                    ctx.strokeRect(map[i][j].x, map[i][j].y, 50, 50);
            }
        }  
    }

    ctx.drawImage(max, maxX, 275);
    requestAnimationFrame(draw);
}

max.onload = draw;