import { setTime } from "./timer.js";
import { gameBoard } from "./main.js";

export let wrongGuessCount = 1;
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

export const cardHandler = () => {
  const counter = document.querySelector(".counter-value");
  const title = document.querySelector(".animate-charcter");
  // back side image
  const backSide = "../images/question_mark-flipped.jpg";
  // getting all img elements inside the table and storing them as an array
  const imgs = [...document.querySelectorAll(".table img")];
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
        if (countMatches === 6) {
          clearInterval(time);
          title.innerHTML = "You Won!";
          gameBoard.removeEventListener("click", addClickEvent);
        }
      } else {
        // Counting the number of guesses
        counter.innerHTML = wrongGuessCount++;
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

export const isMatch = (cards) => {
  for (let i = 1; i < cards.length; i++) {
    if (cards[0].getAttribute("card-id") !== cards[i].getAttribute("card-id")) {
      return false;
    }
  }
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
  if (firstClick) {
    time = setInterval(setTime, 1000);
    firstClick = false;
  }

  if (cooldown) return;
  const frontSide = {
    1: "../images/img_1.png",
    2: "../images/img_2.png",
    3: "../images/img_3.png",
    4: "../images/img_4.png",
    5: "../images/img_5.png",
    6: "../images/img_6.png",
    7: "../images/img_7.png",
    8: "../images/img_8.png",
    9: "../images/img_9.png",
    10: "../images/img_10.png",
    11: "../images/img_11.png",
    12: "../images/img_12.png",
  };
  const card = e.target;
  // cardId saves the id that was given to the img randomly
  const cardId = card.getAttribute("card-id");
  // changing src attributes to the image that was clicked base on the frontSide object
  card.setAttribute("src", frontSide[cardId]);
  card.style.transform = "rotateY(0deg)";
  card.setAttribute("flipped", "checkForMatch");

  cardHandler();
};