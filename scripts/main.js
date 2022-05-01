const gameView = document.getElementsByClassName("game_view");



function table(card, row, column) {
    let gameTable;
    if (tiles === 'ground'){
         gameTable = "<table class='table_ground'>"
    }
    if (tiles === 'sky'){
         gameTable = "<table class='table_sky'>"
    }
    if (tiles === 'cloud'){
         gameTable = "<table class='table_cloud'>"
    }
    for (let i = 0; i < row; i++) {
        gameTable = gameTable + "<tr>";
        for (let j = 0; j < column; j++) {
             
                gameTable = gameTable + "<td>" + "</td>";

        
         }
    
         gameTable = gameTable + "</tr>";
      } 
      return gameTable;
    }


let gameTable1 = table('cloud', 2, 3); ; 
gameTable1 = gameTable1 + "</table>";
console.log(gameTable1);
document.getElementById("table").innerHTML = gameTable1;


