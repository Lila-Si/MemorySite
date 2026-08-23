/* Gérer le jeu (mode, score, timer), animations (cartes qui se retournent) & event (victoire, échec) */


/* Imports & variables */
import { memoryInfo, randomArray, initialization } from './initialisation.js';

let score = 0;
let gameOver = false;

const memoryCards = document.getElementsByClassName('memory_cards');


/* Fonction d'animation et code de vérification des cartes*/
function animFlip () {
    if (gameOver) {
        return;
    };
    /* Animation, checker l'image, si back changer et rotate de 180*/
};

/* memoryCards.addEventListener("click", () =>{
    if (gameOver) {
        return;
    };
    animFlip();
    if (L'ID des cartes sont égales) {
        score++;
        et les faire disparaitre
        if (score == memoryArrayRandom.length / 2) {
            alert('Bravooooo, tu es arrivé•e au bout !');
            return ;
    } else {
        Attendre 4s
        Retourner de nouveau les cartes
    };
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