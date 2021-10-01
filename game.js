let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let red = new Image();
let green = new Image();
let blue = new Image();
let max = new Image();
let block = new Image();
let redBanner = new Image();
let blueBanner = new Image();
let greenBanner = new Image();
let frameBg = new Image();

let maxX = 0;
let mouseX = 0;
let mouseY = 0;
let canMove = false;

let cordPastX = 0;
let cordPastY = 0;

red.src = "img/redOrig.png";
green.src = "img/greenOrig.png";
blue.src = "img/blueOrig.png";
block.src = "img/block.png";
max.src = "img/maxFull.png";
redBanner.src = "img/redBanner.png";
blueBanner.src = "img/blueBanner.png";
greenBanner.src = "img/greenBanner.png";
frameBg.src = "img/frame.png";

cvs.addEventListener("click", function (e) {
  maxX += 25;

  const rect = cvs.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;

  if (mouseX > 500 || mouseY > 600) 1;
  else move();
});

//Очистка желтых
function clearY (){
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
          if(map[i][j].fac == "Y") map[i][j].fac = "";
        }
      }
}

function isVictory(){
    let isWin = false;

    for (let i = 0; i < 5; i++) {
        if(map[i][0].clr == map[i][0].fac) isWin = true;
        else return;
    }
    for (let i = 0; i < 5; i++) {
        if(map[i][2].clr == map[i][2].fac) isWin = true;
        else return;
    }
    for (let i = 0; i < 5; i++) {
        if(map[i][4].clr == map[i][4].fac) isWin = true;
        else return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(max, 0, 0, 250, 250);
}

function move() {

//Корды нажатой ячейки
  let cord1;
  let cord2;

  let isBreak = false;

  //Определение в какую ячейку нажали
  for (let i = 0; i < map.length; i++) {
    if (isBreak) {
      isBreak = false;
      break;
    }
    for (let j = 0; j < map[i].length; j++) {
      if (mouseX < map[i][j].x + 100)
        if (mouseY < map[i][j].y + 100) {
          cord1 = i;
          cord2 = j;
          isBreak = true;
          break;
        }
    }
  }

  //Проверка на блок
  if (map[cord1][cord2].fac == "Bl" || map[cord1][cord2].fac == "") return;

  //Проверка на перемещение на свободную
  if (canMove == true){
    if (map[cord1][cord2].fac == "Y") {
        map[cord1][cord2].fac = map[cordPastX][cordPastY].fac
        map[cordPastX][cordPastY].fac = "";
        canMove = false;
        clearY();
        draw();
        isVictory();
        return;
    }
  }

  clearY();

  //Проверка на занятость и покраска в желтый
  if (cord1 != 0 && map[cord1 - 1][cord2].fac == "") {
    map[cord1 - 1][cord2].fac = "Y";
    canMove = true;
  }
  if (cord2 != 0 && map[cord1][cord2 - 1].fac == "") {
    map[cord1][cord2 - 1].fac = "Y";
    canMove = true;
  }
  if (cord1 != 4 && map[cord1 + 1][cord2].fac == "") {
    map[cord1 + 1][cord2].fac = "Y";
    canMove = true;
  }
  if (cord2 != 4 && map[cord1][cord2 + 1].fac == "") {
    map[cord1][cord2 + 1].fac = "Y";
    canMove = true;
  };

  cordPastX = cord1;
  cordPastY = cord2;

  draw();
}

function draw() {
  //Очистка
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(redBanner, 0, 0, 100, 100);
  ctx.drawImage(greenBanner, 200, 0, 100, 100);
  ctx.drawImage(blueBanner, 400, 0, 100, 100);
  //ctx.drawImage(frameBg, 0, 0, 525, 525);

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
        ctx.strokeStyle = "gray";
        ctx.strokeRect(map[i][j].x, map[i][j].y, 100, 100);

      switch (map[i][j].fac) {
        case "R":
          ctx.drawImage(red, map[i][j].x, map[i][j].y, 100, 100);
          break;

        case "G":
          ctx.drawImage(green, map[i][j].x, map[i][j].y, 100, 100);
          break;

        case "B":
          ctx.drawImage(blue, map[i][j].x, map[i][j].y, 100, 100);
          break;
        case "Bl":
            ctx.drawImage(block, map[i][j].x, map[i][j].y, 100, 100);
          break;
        case "Y":
          ctx.fillStyle = "yellow";
          ctx.fillRect(map[i][j].x + 25, map[i][j].y + 25, 50, 50);
        default:
          
      }
    }
  }
}

max.onload = draw;