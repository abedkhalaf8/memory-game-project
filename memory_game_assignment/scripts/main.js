import { assignIds, addClickEvent } from "./cards.js";
import { table, arryOfCards } from "./table.js";

let gameTable = table(arryOfCards, 3, 4);
gameTable = gameTable + "</table>";
document.getElementById("flashcard").innerHTML = gameTable;

assignIds();

export const gameBoard = document.querySelector(".table");
gameBoard.addEventListener("click", addClickEvent);

