import { level } from "./main.js";
import { wrongGuessCount } from "./cards.js";
const nameInput = document.querySelector(".name_input");
const name = document.querySelector(".name_input #name");
const submit = document.querySelector(".name_input #submit");

export const takeName = () => {
  nameInput.style.display = "block";
  submit.addEventListener("click", submitNameToLeaderBoard);
}

export const leaderBoardUpdate = (name) => {
  const lbTable = document.querySelector(".leader_board_table");
  const tr = document.createElement("tr");
  tr.innerHTML = `<tr><td>${name}</td><td>${wrongGuessCount}</td><td>${level}</td></tr>`
  lbTable.append(tr);
  submit.removeEventListener("click", submitNameToLeaderBoard);
}

export const submitNameToLeaderBoard = () => {
  leaderBoardUpdate(name.value);
  nameInput.style.display = "none";
  name.value = ""; 
}