
//Очистка желтых
function clearY() {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j].fac == "Y") map[i][j].fac = "";
    }
  }
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
  if (canMove == true) {
    if (map[cord1][cord2].fac == "Y") {
      map[cord1][cord2].fac = map[cordPastX][cordPastY].fac;
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
  }

  cordPastX = cord1;
  cordPastY = cord2;

  draw();
}

//Проверка победы
function isVictory() {
  isWin = false;

  for (let i = 0; i < 5; i++) {
    if (map[i][0].clr == map[i][0].fac) isWin = true;
    else {
      isWin = false;
      return;
    }
  }
  for (let i = 0; i < 5; i++) {
    if (map[i][2].clr == map[i][2].fac) isWin = true;
    else {
      isWin = false;
      return;
    }
  }
  for (let i = 0; i < 5; i++) {
    if (map[i][4].clr == map[i][4].fac) isWin = true;
    else {
      isWin = false;
      return;
    }
  }

  ctx.canvas.width = 1000;
  draw();

  if (whatFin == 2) {
    ctx.drawImage(max, 500, 00, 500, 600);
    ctx.drawImage(bvoken, 0, 100, 500, 500);
  } else {
    ctx.drawImage(dambledur, 500, 100, 500, 600);
    ctx.font = "24px serif";
    ctx.fillText("Ну это 100 баллов!", 785, 175);
  }
}
