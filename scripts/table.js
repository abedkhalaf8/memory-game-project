// an array of cards that will be in the game board
export const arryOfCards = [
  "<img src='../imgs/question_mark-flipped.jpg' id='img'></img>",
];

export function table(card, row, column) {
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