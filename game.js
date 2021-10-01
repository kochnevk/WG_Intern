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
let dambledur = new Image();
let bvoken = new Image();

red.src = "img/redOrig.png";
green.src = "img/greenOrig.png";
blue.src = "img/blueOrig.png";
block.src = "img/block.png";
max.src = "img/max.png";
redBanner.src = "img/redBanner.png";
blueBanner.src = "img/blueBanner.png";
greenBanner.src = "img/greenBanner.png";
dambledur.src = "img/dambledur.png";
bvoken.src = "img/Bvoken.png";

//Корды нажатия
let mouseX = 0;
let mouseY = 0;
//Можно убрать, но нужен, чтобы после победы заблочилась доска
let isWin = false;
let canMove = false;
let whatFin = 1;

let cordPastX = 0;
let cordPastY = 0;

cvs.addEventListener("click", function (e) {
  const rect = cvs.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;

  if (mouseX > 500 || mouseY > 600 || isWin == 1) 1;
  else move();
});

//Start
let button0 = document.getElementById("Start");
button0.addEventListener("click", function (e) {
  draw();
})
//Концовка 1
let button1 = document.getElementById("Fin1");
button1.addEventListener("click", function (e) {
  whatFin = 1;
  alert("Концовка 1!!!");
});
//Концовка 2
let button2 = document.getElementById("Fin2");
button2.addEventListener("click", function (e) {
  whatFin = 2;
  alert("Концовка 2!!!");
});
//Reset
let button3 = document.getElementById("Reset");
button3.addEventListener("click", function (e) {
  alert("ЗАНОВО!!!");
  location.reload();
});


function draw() {
  //Очистка
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(redBanner, 0, 0, 100, 100);
  ctx.drawImage(greenBanner, 200, 0, 100, 100);
  ctx.drawImage(blueBanner, 400, 0, 100, 100);

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