// an array of cards that will be in the game board
const arryOfCards = [ 
    "<img src='../imgs/question_mark-flipped.jpg' id='img'></img>"
]

function table(card, row, column) {
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



let gameTable1 = table(arryOfCards, 3, 4);
gameTable1 = gameTable1 + "</table>";
// console.log(gameTable1);
document.getElementById("flashcard").innerHTML = gameTable1;

const imgs = document.querySelectorAll(".table img");

const assignIds = () => {
    const imgs = document.querySelectorAll(".table img");
    const pairs = imgs.length / 2;
    let id = Math.floor(Math.random() * pairs) + 1;
    const ids = {};
    for(let i = 0; i < imgs.length; i++) {
        id = Math.floor(Math.random() * pairs) + 1;
        while(ids[id] === 2) id = Math.floor(Math.random() * pairs) + 1;
        if(ids[id] === undefined) ids[id] = 1;
        else ids[id]++;
        imgs[i].setAttribute("card-id", id);
     
    }
}
assignIds();


let cooldown = false;
const addClickEvent = (e) => {
    if(cooldown) return;
    const frontSide = {
        1: "../imgs/img_1.png",
        2: "../imgs/img_2.png",
        3: "../imgs/img_3.png",
        4: "../imgs/img_4.png",
        5: "../imgs/img_5.png",
        6: "../imgs/img_6.png",
    }
    const card = e.target;
    // cardId saves the id that was given to the img randomly
    const cardId = card.getAttribute("card-id");
    // changing src attributes to the image that was clicked base on the frontSide object
    card.setAttribute("src", frontSide[cardId]);
    card.style.transform = "rotateY(0deg)";
    card.setAttribute("flipped", "checkForMatch");

    cardHandler();
}

const table1 = document.querySelector(".table");
table1.addEventListener("click", addClickEvent);



const cardHandler = () => {
    // back side image
    const backSide = "../imgs/question_mark-flipped.jpg";
    // getting all img elements inside the table and storing them as an array
    const imgs = [...document.querySelectorAll(".table img")];
    // getting only the imgs that have attribute of flipped and is check for match
    let flippedCards = imgs.filter(img => {
        return img.getAttribute("flipped") === "checkForMatch";
    })
    const card1 = flippedCards[0];
    const card2 = flippedCards[1];

    if(flippedCards.length === 2) {
        // count++;
        // when cooldown is true you can't click
        cooldown = true;
        // time out function to make cards unclickable if 2 cards are flipped
        setTimeout(() => {
            // check if the 2 cards match id
            if(isMatch(flippedCards)) {
                // if they match change flipped atrribute from checkForMatch to matchFound
                changeAttribute(flippedCards, "flipped", "matchFound");
            } else {
                // if they don't match remove flipped attribute and change the displayed img to the backside image
                removeAttr(flippedCards, "flipped");
                changeAttribute(flippedCards, "src", backSide);
                card1.style.transform = "rotateY(180deg)";
                card2.style.transform = "rotateY(180deg)";
            }
        // sets cooldown to false to make cards clickable again
        cooldown = false;
        // after 1 second delay
        }, 1000)
    }
}

const isMatch = (cards) => {
    for(let i = 1; i < cards.length; i++) {
        if(cards[0].getAttribute("card-id") !== cards[i].getAttribute("card-id")) {
            return false;
        }
    }
    return true;
}

const changeAttribute = (cards, attribute, value) => {
    for(let i = 0; i < cards.length; i++) {
        cards[i].setAttribute(attribute, value);
    }
}

const removeAttr = (cards, attribute) => {
    for(let i = 0; i < cards.length; i++) {
        cards[i].removeAttribute(attribute);
    }
}

// Timer added by Abed 
//1- connect it to the first click.
//2- and to the last click at the end of the game.
let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}