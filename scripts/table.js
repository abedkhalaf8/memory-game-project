import { assignIds, addClickEvent } from "./cards.js";

// an array of cards that will be in the game board
export const arryOfCards = [
  "<img src='./assets/images/question_mark-flipped.jpg' id='img'></img>",
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

export const createGameBoard = (row, column) => {
  let gameTable = table(arryOfCards, row, column);
  gameTable = gameTable + "</table>";
  document.getElementById("flashcard").innerHTML = gameTable;
  assignIds();
  const gameBoard = document.querySelector(".table");
  gameBoard.addEventListener("click", addClickEvent);
}