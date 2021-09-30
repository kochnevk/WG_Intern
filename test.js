let map = [[],[],[],[],[]];

for (let i=0; i < 5; i++) {
    for (let j=0; j < 5; j++){
        map[i][j] = {
            x : j * 50,
            y : i * 50,
            clr : ""
        }
        
        if(j == 0) map[i][j].clr = "R" ;
        else if(j == 2) map[i][j].clr = "G" ;
        else if(j == 4) map[i][j].clr = "B" ;
    }  
}

map[0][1].clr = "Bl";
map[0][3].clr = "Bl";
map[2][1].clr = "Bl";
map[2][3].clr = "Bl";
map[4][1].clr = "Bl";
map[4][3].clr = "Bl";