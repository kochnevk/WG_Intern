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

cvs.addEventListener("click", function(e){
    maxX += 25;

    const rect = cvs.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    alert( x + "  " +y);

    move();
})

function move (){
    
    let cord1;
    let cord2;

    for (let i=0; i < map.length; i++) {
        if (isBreak) {
            isBreak = false;
            break;
        }  
        for (let j=0; j < map[i].length; j++){
            if( mouseX < (map[i][j].x) + 50) 
                if (mouseY < (map[i][j].y) + 50) {
                    cord1 = i;
                    cord2 = j;
                    isBreak = true;
                    break;
                }
        }
    }

//Проверка на занятость и покраска в желтый
    if(cord1 != 0 && map[cord1-1][cord2].fac == "") map[cord1-1][cord2].fac = "Y"
    if(cord2 != 0 && map[cord1][cord2-1].fac == "") map[cord1][cord2-1].fac = "Y"
    if(cord1 != 4 && map[cord1+1][cord2].fac == "") map[cord1+1][cord2].fac = "Y"
    if(cord2 != 4 && map[cord1][cord2+1].fac == "") map[cord1][cord2+1].fac = "Y"

}

function draw (){
    //Очистка
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for (let i=0; i < map.length; i++) {
        for (let j=0; j < map[i].length; j++){
            switch (map[i][j].fac) {
                case "R" :
                    ctx.strokeStyle  = "red";
                    ctx.strokeRect(map[i][j].x, map[i][j].y, 50, 50);
                    ctx.drawImage(red, map[i][j].x, map[i][j].y, 50, 50)
                   break;

                case "G" :
                    ctx.strokeStyle  = "green";
                    ctx.strokeRect(map[i][j].x, map[i][j].y, 50, 50);
                    ctx.drawImage(green, map[i][j].x, map[i][j].y, 50, 50)
                   break;

                case "B" :
                    ctx.strokeStyle  = "blue";
                    ctx.strokeRect(map[i][j].x, map[i][j].y, 50, 50);
                    ctx.drawImage(blue, map[i][j].x, map[i][j].y, 50, 50)
                    break;
                case "Bl" :
                    ctx.fillStyle = "black";
                    ctx.fillRect(map[i][j].x, map[i][j].y, 50, 50);
                    break;
                case "Y" :
                    ctx.strokeStyle  = "gray";
                    ctx.strokeRect(map[i][j].x, map[i][j].y, 50, 50);
                    ctx.fillStyle = "yellow";
                    ctx.fillRect(map[i][j].x+20, map[i][j].y+20, 10, 10);
                default :
                    ctx.strokeStyle  = "gray";
                    ctx.strokeRect(map[i][j].x, map[i][j].y, 50, 50);
            }
        }  
    }

    //ctx.drawImage(max, maxX, 275);
    requestAnimationFrame(draw);
}

max.onload = draw;