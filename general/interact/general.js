/* Gérer le jeu (mode, score, timer), animations (cartes qui se retournent) & event (victoire, échec) */


/* Imports & variables */
import { memoryInfo, memoryImgBack, randomArray, initialization } from './initialisation.js';

let score = 0;
const scoreElement = document.getElementById('score_num');

let gameOver = false;

const memoryCards = document.getElementById('cards');
let firstCard = null;
let oneCardActive = false;

const tableauRandomise = randomArray(memoryInfo);


/* Fonction d'animation et code de vérification des cartes*/
/* function animFlip (card, backOrigin) {
    if (gameOver) {
        return;
    };
    if (card.src == memoryImgBack) {
        const tableauImg = tableauRandomise.map(({ image }) => image);
        document.card.style.rotate = '180deg';
        card.src = tableauImg[card];
    } else if (backOrigin == true) {
        document.card.style.rotate = '180deg';
        card.src = memoryImgBack;
    };
};

function cardScore(cardOne, cardTwo) {
    const tableauId = tableauRandomise.map(({ id }) => id);
    const firstId = tableauId[cardOne];
    const secondId = tableauId[cardTwo];

    if (firstId == secondId) {
        score++;
        scoreElement.textContent = score;
        document.cardOne.style.opacity = 'hidden';
        document.cardTwo.style.opacity = 'hidden';
        if (score == tableauRandomise.length / 2) {
            alert('Bravooooo, tu es arrivé•e au bout !');
            return;
        };
    } else {
        animFlip(cardOne, true);
        animFlip(cardTwo, true);
    };
};

memoryCards.addEventListener("click", event =>{
    if (gameOver) {
        return;
    };
    const cardTarget = event.target.closest(".memory_cards");
    if (!cardTarget) {
         return;       
    }

    animFlip(cardTarget, false);

    if (firstCard === null) {
        firstCard = cardTarget;
    } else {
        cardScore(firstCard, cardTarget);
        firstCard = null;
    };
    console.log(firstCard, cardTarget);
}); */


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
        if (score == randomArray.length / 2) { /* Remplacer randomArray par memoryArrayRandom */
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
    initialization(memoryInfo);
    modeChallenge();
});

document.getElementById('mode_normal').addEventListener("click", () => {
    document.getElementById('popup').classList.add('hidden');
    initialization(memoryInfo);
    modeNormal();
});