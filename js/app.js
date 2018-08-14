/*
 * Create a list that holds all of your cards
 */

 const icons = ["fa fa-diamond", "fa fa-diamond", 
                "fa fa-paper-plane-o", "fa fa-paper-plane-o",
                "fa fa-anchor", "fa fa-anchor",
                "fa fa-bolt", "fa fa-bolt",
                "fa fa-cube", "fa fa-cube",
                "fa fa-leaf", "fa fa-leaf",
                "fa fa-bicycle", "fa fa-bicycle",
                "fa fa-bomb", "fa fa-bomb"];

const cardsContainer = document.querySelector(".deck");

let openedCards = [];
let matchedCards = [];

// Create cards
function startGame() {
for (let i = 0; i < icons.length; i++) {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `<i class="${icons[i]}"></i>`;
    cardsContainer.appendChild(card);

    click(card);
    }
}
// click event
function click(card) {
card.addEventListener("click", function() {
    const currentCard = this;
    const previousCard = openedCards[0];

    if(openedCards.length === 1) {

        card.classList.add("open", "show");
        openedCards.push(this);
        
        // compare cards
        if(currentCard.innerHTML === previousCard.innerHTML) {
            currentCard.classList.add("match");
            previousCard.classList.add("match");
            matchedCards.push(currentCard, previousCard);
            openedCards = [];
            addMove();
            gameOver();
        } else {
            
            
            
            setTimeout (function() {
                currentCard.classList.remove("open", "show", "disable");
                previousCard.classList.remove("open", "show", "disable");
            }, 700);

            openedCards = [];
            addMove();
        }

    } else {
        currentCard.classList.add("open", "show", "disable");
        openedCards.push(this);
    }
});
}
const movesContainer = document.querySelector(".moves");
let moves = 0;

function addMove(){
    moves++;
    movesContainer.innerHTML = moves;
    score();
}

const stars = document.querySelector(".stars");
const star = document.querySelector("fa-star");

function score(){
    switch(moves) {
        case 16:
            stars.innerHTML = `<li><i class="fa fa-star"></i></li>`;
            break;
        case 12:
        stars.innerHTML = `<li><i class="fa fa-star"></i></li><li><i class="fa fa-star"></i></li>`;
            break;
        }
}

//game over

function gameOver() {
    if (matchedCards.length === icons.length) {
        setTimeout(function () {
            alert("Game Over!")
        }, 400);
    }
}

// shuffling
const deck = document.querySelector(".deck");

function shuffleDeck() {
    const cardsToShuffle = Array.from(document.querySelectorAll(".deck li"));
    const shuffledCards = shuffle(cardsToShuffle);
    for (card of shuffledCards) {
        deck.appendChild(card);
    }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



startGame();
shuffleDeck();


// restart

const restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", function(){

    cardsContainer.innerHTML = '';

    startGame();
    movesContainer.innerHTML = '0';
    matchedCards = [];
    openedCards = [];

});


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
