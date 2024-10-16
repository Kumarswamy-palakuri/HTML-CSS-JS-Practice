const cards = document.querySelectorAll(".card");
let firstCard, secondCard;
let lock = false;
let isFlipped = false;

cards.forEach(card => 
    card.addEventListener("click", flip));

function flip() {
    if (lock)
    return;

    if (this === firstCard)
    return;

    this.classList.add("flip");
    if(!isFlipped){
        isFlipped = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    check();
}

function check() {
    let isMatch = firstCard.dataset.image === 
    secondCard.dataset.image;
    isMatch ? success() : failed();
}

function success() {
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();
}

function failed() {
    lock = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);
}

function reset() {
    [isFlipped, lock] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let position = Math.floor(Math.random() * 16);
        card.style.order = position;
    });
})();
