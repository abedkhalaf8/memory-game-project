// an array of cards that will be in the game board
const arryOfCards = [ 
    "<img src='/imgs/question_mark.jpeg' id='img'></img>"
]
function table(card, row, column) {
    let gameTable = "<table class='table'>";
    for (let i = 0; i < row; i++) {
        gameTable = gameTable + "<tr id='tr'>";
        for (let j = 0; j < column; j++) {
                gameTable = gameTable + `<td id='td'> ${card} </td>`;
         }
         gameTable = gameTable + "</tr>";
      } 
      return gameTable;
    }
let gameTable1 = table(arryOfCards, 3, 4); ; 
gameTable1 = gameTable1 + "</table>";
console.log(gameTable1);
document.getElementById("flashcard").innerHTML = gameTable1;





