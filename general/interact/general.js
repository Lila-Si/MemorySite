/* Gérer le jeu (mode, score, timer), animations (cartes qui se retournent) & event (victoire, échec) */


/* Imports & variables */
import { memoryInfo, memoryImgBack, randomArray, initialization } from './initialisation.js';

let score = 0;
const scoreElement = document.getElementById('score_num');

let gameOver = false;
let tableauRandomise = [];

const memoryCards = document.getElementById('cards');
let firstCard = null;
let oneCardActive = false;


/* Fonction d'animation et code de vérification des cartes*/
function setupCards() {
    tableauRandomise = randomArray(memoryInfo);

    initialization(memoryInfo);

    document.querySelectorAll(".memory_cards").forEach((card, i) => {
        card.dataset.id = String(tableauRandomise[i].id);
        card.dataset.image = tableauRandomise[i].image;
        card.src = memoryImgBack;
    });

    return tableauRandomise
};


function scoreAdd(cardOne, cardTwo) {
    return cardOne.dataset.id === cardTwo.dataset.id;
}

memoryCards.addEventListener('click', event => {
    if (gameOver) {
        return;
    };
    if (oneCardActive) {
        return;
    };
    const cardTarget = event.target.closest('.memory_cards');
    if (!cardTarget || cardTarget.classList.contains('matched')) {
        return;
    };
    if (cardTarget === firstCard) {
        return;
    };

    cardTarget.src = cardTarget.dataset.image;
    if (firstCard === null) {
        firstCard = cardTarget
        return;
    };

    oneCardActive = true;
    const cardOne = firstCard;
    const cardTwo = cardTarget;
    firstCard = null;

    if (scoreAdd(cardOne, cardTwo)) {
        score++;
        scoreElement.textContent = score;
        cardOne.classList.add('matched');
        cardTwo.classList.add('matched');
        oneCardActive = false;
        if (score == tableauRandomise.length / 2) {
            setTimeout(() => alert("Bravooooo, tu es arrivé•e au bout !"), 400);
        };
    } else {
        setTimeout(() => {
            cardOne.src = memoryImgBack;
            cardTwo.src = memoryImgBack;
            oneCardActive = false;
        }, 1000);
    };
});


/* Fonctions timer (mode challenge et normal) */
function zero_timer(num) {
        return num < 10 ? '0' + num : num;
}

function modeChallenge() {
    let timer = null;
    let timeMin = 10;
    let timeSec = 0;
    document.getElementById('timer_min').textContent = zero_timer(timeMin);
    document.getElementById('timer_sec').textContent = zero_timer(timeSec);

    clearInterval(timer);
    timer = setInterval(() => {
        if (score == tableauRandomise.length / 2) {
            return ;
        };
        if (timeSec > 0) {
            timeSec--;
            document.getElementById('timer_sec').textContent = zero_timer(timeSec);
        } else {
            timeSec = 59;
            timeMin--;
            document.getElementById('timer_sec').textContent = zero_timer(timeSec);
            document.getElementById('timer_min').textContent = zero_timer(timeMin);
        }
        if (timeSec <= 0 && timeMin <= 0) {
            alert('Mince, plus de temps. Vous aurez peut-être plus de chance la prochaine fois !');
            gameOver = true;
            clearInterval(timer);
            return;
        };
    }, 1000);
};

function modeNormal() {
    let timer = null;
    let timeMin = 0;
    let timeSec = 0;
    document.getElementById('timer_min').textContent = zero_timer(timeMin);
    document.getElementById('timer_sec').textContent = zero_timer(timeSec);

    clearInterval(timer);
    timer = setInterval(() => {
        if (score == tableauRandomise.length / 2) {
            return ;
        };
        if (timeSec != 59) {
            timeSec++;
            document.getElementById('timer_sec').textContent = zero_timer(timeSec);
        } else {
            timeSec = 0;
            timeMin++;
            document.getElementById('timer_sec').textContent = zero_timer(timeSec);
            document.getElementById('timer_min').textContent = zero_timer(timeMin);
        }
    }, 1000);
};


/* Boutons qui lancent le jeu */
document.getElementById('mode_challenge').addEventListener("click", () => {
    document.getElementById('popup').classList.add('hidden');
    setupCards();
    modeChallenge();
});

document.getElementById('mode_normal').addEventListener("click", () => {
    document.getElementById('popup').classList.add('hidden');
    setupCards();
    modeNormal();
});