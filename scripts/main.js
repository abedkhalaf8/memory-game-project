import { assignIds, addClickEvent } from "./cards.js";
import { table, arryOfCards } from "./table.js";

let gameTable = table(arryOfCards, 3, 4);
gameTable = gameTable + "</table>";
document.getElementById("flashcard").innerHTML = gameTable;
assignIds();
export const gameBoard = document.querySelector(".table");
gameBoard.addEventListener("click", addClickEvent);


// game levels
let btn1 = document.getElementById("btn-easy");
let btn2 = document.getElementById("btn-medium");
let btn3 = document.getElementById("btn-hard");
const audio2 = new Audio('../sounds/level_up.mp3')
audio2.volume = 1;
btn1.addEventListener('click', function (){
    gameTable = table(arryOfCards, 3, 4);
    gameTable = gameTable + "</table>";
    document.getElementById("flashcard").innerHTML = gameTable;
    assignIds();
    const gameBoard = document.querySelector(".table");
    gameBoard.addEventListener("click", addClickEvent);
    audio2.play();
})
btn2.addEventListener('click', function (){
   gameTable = table(arryOfCards, 3, 6);
   gameTable = gameTable + "</table>";
   document.getElementById("flashcard").innerHTML = gameTable;
   assignIds();
   const gameBoard = document.querySelector(".table");
   gameBoard.addEventListener("click", addClickEvent);
   audio2.play();
})
btn3.addEventListener('click', function (){
  gameTable = table(arryOfCards, 4, 6);
  gameTable = gameTable + "</table>";
  document.getElementById("flashcard").innerHTML = gameTable;
  assignIds();
  const gameBoard = document.querySelector(".table");
  gameBoard.addEventListener("click", addClickEvent);
  audio2.play();
})

// set for the background music
let backgroundAudio = document.getElementById("myAudio");
backgroundAudio.volume = 2;