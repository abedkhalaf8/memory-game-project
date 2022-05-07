// Timer added by Abed
//1- connect it to the first click.
//2- and to the last click at the end of the game.
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;

export function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

export function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

export function resetTime() {
  secondsLabel.innerHTML = "00";
  minutesLabel.innerHTML = "00";
  totalSeconds = 0;
}