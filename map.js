let map = [[], [], [], [], []];

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    map[i][j] = {
      x: j * 100,
      y: i * 100 + 100,
      clr: "",
      fac: "",
    };

    if (j == 0) map[i][j].clr = "R";
    else if (j == 2) map[i][j].clr = "G";
    else if (j == 4) map[i][j].clr = "B";
  }
}

//Блоки
map[0][1].fac = "Bl";
map[0][3].fac = "Bl";
map[2][1].fac = "Bl";
map[2][3].fac = "Bl";
map[4][1].fac = "Bl";
map[4][3].fac = "Bl";

//Рандомизация позиций
let bricks = [];
for (let i = 0; i < 5; i++) {
    bricks.push("R");
    bricks.push("G");
    bricks.push("B");
}
for(let i = 0; i<100;i++){
    let buf;
    let rand1 = Math.floor(Math.random() * 15);
    let rand2 = Math.floor(Math.random() * 15);
    buf = bricks[rand1];
    bricks[rand1] = bricks[rand2];
    bricks[rand2] = buf; 
}

for (let i = 0; i < 5; i++) {
    map[i][0].fac = bricks.pop();
}
for (let i = 0; i < 5; i++) {
    map[i][2].fac = bricks.pop();
}
for (let i = 0; i < 5; i++) {
    map[i][4].fac = bricks.pop();
}
