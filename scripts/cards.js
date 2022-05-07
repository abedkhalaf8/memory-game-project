import { setTime } from "./timer.js";
import { takeName } from "./leader_board.js"

export let wrongGuessCount = 0;
export let countMatches = 0;
export let firstClick = true;
export let cooldown = false;
export let time;

export const assignIds = () => {
  const imgs = document.querySelectorAll(".table img");
  const pairs = imgs.length / 2;
  let id = Math.floor(Math.random() * pairs) + 1;
  const ids = {};
  for (let i = 0; i < imgs.length; i++) {
    id = Math.floor(Math.random() * pairs) + 1;
    while (ids[id] === 2) id = Math.floor(Math.random() * pairs) + 1;
    if (ids[id] === undefined) ids[id] = 1;
    else ids[id]++;
    imgs[i].setAttribute("card-id", id);
  }
};

export const cardHandler = (currentGameBoard) => {
  const audio1 = new Audio('./assets/sounds/win_game.mp3');
  audio1.volume = 1;
  const counter = document.querySelector(".counter-value");
  const title = document.querySelector(".animate-charcter");
  // back side image
  const backSide = "./assets/images/question_mark-flipped.jpg";
  // getting all img elements inside the table and storing them as an array
  const imgs = [...document.querySelectorAll(".table img")];
  const pairs = imgs.length / 2;
  // getting only the imgs that have attribute of flipped and is check for match
  let flippedCards = imgs.filter((img) => {
    return img.getAttribute("flipped") === "checkForMatch";
  });
  if (flippedCards.length === 2) {
    // when cooldown is true you can't click
    cooldown = true;
    // time out function to make cards unclickable if 2 cards are flipped
    setTimeout(() => {
      // check if the 2 cards match id
      if (isMatch(flippedCards)) {
        // if they match change flipped atrribute from checkForMatch to matchFound
        changeAttribute(flippedCards, "flipped", "matchFound");
        countMatches++;
        if (countMatches === pairs) {
          clearInterval(time);
          title.innerHTML = "You Won!";
          currentGameBoard.removeEventListener("click", addClickEvent);
          countMatches = 0;
          takeName()
          audio1.play();
        }
      } else {
        // Counting the number of guesses
        counter.innerHTML = ++wrongGuessCount;
        // if they don't match remove flipped attribute and change the displayed img to the backside image
        removeAttr(flippedCards, "flipped");
        changeAttribute(flippedCards, "src", backSide);
        flippedCards[0].style.transform = "rotateY(180deg)";
        flippedCards[1].style.transform = "rotateY(180deg)";
      }
      // sets cooldown to false to make cards clickable again
      cooldown = false;
      // after 1 second delay
    }, 1000);
  }
};
const audio5 = new Audio('./assets/sounds/no_match.mp3');
audio5.volume = 1;
const audio4 = new Audio('./assets/sounds/card_match.mp3');
audio4.volume = 1;
export const isMatch = (cards) => {
  for (let i = 1; i < cards.length; i++) {
    if (cards[0].getAttribute("card-id") !== cards[i].getAttribute("card-id")) {
      audio5.play();
      return false;
    }
  }
  audio4.play();
  return true;
}

export const changeAttribute = (cards, attribute, value) => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].setAttribute(attribute, value);
  }
}

export const removeAttr = (cards, attribute) => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].removeAttribute(attribute);
  }
}

export const addClickEvent = (e) => {
  const currentGameBoard = e.currentTarget;
  if (firstClick) {
    time = setInterval(setTime, 1000);
    firstClick = false;
  }

  if (cooldown) return;

  const frontSide = {
    1: "./assets/images/img_1.png",
    2: "./assets/images/img_2.png",
    3: "./assets/images/img_3.png",
    4: "./assets/images/img_4.png",
    5: "./assets/images/img_5.png",
    6: "./assets/images/img_6.png",
    7: "./assets/images/img_7.png",
    8: "./assets/images/img_8.png",
    9: "./assets/images/img_9.png",
    10: "./assets/images/img_10.png",
    11: "./assets/images/img_11.png",
    12: "./assets/images/img_12.png",
  };
  const card = e.target;
  // cardId saves the id that was given to the img randomly
  const cardId = card.getAttribute("card-id");
  // changing src attributes to the image that was clicked base on the frontSide object
  card.setAttribute("src", frontSide[cardId]);
  card.style.transform = "rotateY(0deg)";
  card.setAttribute("flipped", "checkForMatch");

  cardHandler(currentGameBoard);
};

export const resetFirstClick = () => {
  firstClick = true;
} 

export const resetWrongGuessCount = () => {
  const counter = document.querySelector(".counter-value");
  wrongGuessCount = 0;
  counter.innerHTML = wrongGuessCount;
}

export const resetTitle = () => {
  const title = document.querySelector(".animate-charcter");
  title.innerHTML = "Memory Game Assignment";
}
