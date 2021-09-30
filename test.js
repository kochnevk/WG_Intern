let map = [[],[],[],[],[]];

for (let i=0; i < 5; i++) {
    for (let j=0; j < 5; j++){
        map[i][j] = {
            x : j * 50,
            y : i * 50,
            clr : "",
            fac : ""
        }
        
        if(j == 0) map[i][j].clr = "R" ;
        else if(j == 2) map[i][j].clr = "G" ;
        else if(j == 4) map[i][j].clr = "B" ;
    }  
}

//Рандомизация позиций
for (let i=0; i < map.length; i++) {
    for (let j=0; j < map[i].length; j++){
        switch (map[i][j].clr) {
            case "R" :
                map[i][j].fac = "R";
               break;

            case "G" :
                map[i][j].fac = "G";
               break;

            case "B" :
                map[i][j].fac = "B";
                break;
            case "Bl" :
                map[i][j].fac = "Bl";
                break;
            default :
                map[i][j].fac = "";
        }
    }  
}


map[0][1].fac = "Bl";
map[0][3].fac = "Bl";
map[2][1].fac = "Bl";
map[2][3].fac = "Bl";
map[4][1].fac = "Bl";
map[4][3].fac = "Bl";