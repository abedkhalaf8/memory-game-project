// an array of cards that will be in the game board
const arryOfCards = [ 
    "<img src='/imgs/question_mark.jpeg' id='img'></img>"
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
console.log(gameTable1);
document.getElementById("flashcard").innerHTML = gameTable1;




const imgs = document.querySelectorAll(".table img");

const assignIds = () => {
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

const backSide = {
    1: "../imgs/img_1.png",
    2: "../imgs/img_2.png",
    3: "../imgs/img_3.png",
    4: "../imgs/img_4.png",
    5: "../imgs/img_5.png",
    6: "../imgs/img_6.png"
}

const addClickEvent = (e) => {
    const card = e.target;
    console.log(card);
    const cardId = card.getAttribute("card-id");
    card.setAttribute("src", backSide[cardId]);

}

const table1 = document.querySelector(".table");
table1.addEventListener("click", addClickEvent);
