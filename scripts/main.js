function table(card, row, column) {
    let gameTable = "<table>";
    for (let i = 0; i < row; i++) {
        gameTable = gameTable + "<tr>";
        for (let j = 0; j < column; j++) {
                gameTable = gameTable + `<td> ${card} </td>`;
         }
         gameTable = gameTable + "</tr>";
      } 
      return gameTable;
    }
  
const card = [ 
     "<img src='/imgs/cat.jpeg'></img>",
     "<img src='/imgs/cat.jpeg'></img>",
     "<img src='/imgs/cat.jpeg'></img>"
]
let gameTable1 = table(card, 3, 4); ; 
gameTable1 = gameTable1 + "</table>";
console.log(gameTable1);
document.getElementById("game_view").innerHTML = gameTable1;


