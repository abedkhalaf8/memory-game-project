import { resetFirstClick, resetWrongGuessCount, resetTitle } from "./cards.js";
import { createGameBoard } from "./table.js";
import { resetTime } from "./timer.js";

createGameBoard(3, 4);

// game levels
export let level = "easy";
let btn1 = document.getElementById("btn-easy");
let btn2 = document.getElementById("btn-medium");
let btn3 = document.getElementById("btn-hard");
const audio2 = new Audio('./assets/sounds/level_up.mp3')
audio2.volume = 1;
// set for the background music
let backgroundAudio = document.getElementById("myAudio");
backgroundAudio.volume = 1;
btn1.addEventListener('click', function (){
    createGameBoard(3, 4);
    resetFirstClick();
    resetTime();
    resetWrongGuessCount();
    resetTitle();
    level = "easy"
    audio2.play();
})
btn2.addEventListener('click', function (){
  createGameBoard(3, 6);
   resetFirstClick();
   resetTime();
   resetWrongGuessCount();
   resetTitle();
   level = "medium"
   audio2.play();
})
btn3.addEventListener('click', function (){
  createGameBoard(3, 8);
  resetFirstClick();
  resetTime();
  resetWrongGuessCount();
  resetTitle();
  level = "hard"
  audio2.play();
})

