import { resetFirstClick, resetWrongGuessCount, resetTitle } from "./cards.js";
import { createGameBoard } from "./table.js";
import { resetTime } from "./timer.js";

createGameBoard(3, 4);

// game levels
let btn1 = document.getElementById("btn-easy");
let btn2 = document.getElementById("btn-medium");
let btn3 = document.getElementById("btn-hard");
export let level = "easy";
btn1.addEventListener('click', function (){
    createGameBoard(3, 4);
    resetFirstClick();
    resetTime();
    resetWrongGuessCount();
    resetTitle();
    level = "easy"
})
btn2.addEventListener('click', function (){
  createGameBoard(3, 6);
   resetFirstClick();
   resetTime();
   resetWrongGuessCount();
   resetTitle();
   level = "medium"
})
btn3.addEventListener('click', function (){
  createGameBoard(4, 6);
  resetFirstClick();
  resetTime();
  resetWrongGuessCount();
  resetTitle();
  level = "hard"

})
