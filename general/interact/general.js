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
    /* Animation, checker l'image, si back changer et rotate de 180, else changer et rotate aussi */
};

/* memoryCards.addEventListener("click", () =>{
    if (gameOver) {
        return;
    };
    animFlip();
    if (L'ID des cartes sont égales) {
        +1 au score
        et les faire disparaitre
        if (score == memoryArrayRandom.length / 2) {
            alert('Bravooooo, tu es arrivé au bout !');
            return ;
    } else {
        Attendre 4s
        Retourner de nouveau les cartes
    };
}); */


/* Fonctions timer (mode challenge et normal) */
function modeChallenge() {
    let timer = null;
    let timeMin = 10;
    let timeSec = 0;
    document.getElementById('timer_min').textContent = timeMin;
    document.getElementById('timer_sec').textContent = timeSec;

    clearInterval(timer);
    timer = setInterval(() => {
        document.getElementById('zero_timersec').style.display = document.getElementById('zero_timersec').textContent < 10 ? "inline" : "none";
        document.getElementById('zero_timermin').style.display = document.getElementById('zero_timermin').textContent < 10 ? "inline" : "none";
        if (timeSec > 0) {
            timeSec--;
            document.getElementById('timer_sec').textContent = timeSec;
        } else {
            timeSec = 59;
            timeMin--;
            document.getElementById('timer_sec').textContent = timeSec;
            document.getElementById('timer_min').textContent = timeMin;
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
    document.getElementById('timer_min').textContent = timeMin;
    document.getElementById('timer_sec').textContent = timeSec;

    clearInterval(timer);
    timer = setInterval(() => {
        if (score == randomArray.length / 2) { /* Remplacer randomArray par memoryArrayRandom */
            return ;
        };
        document.getElementById('zero_timersec').style.display = document.getElementById('zero_timersec').textContent < 10 ? "inline" : "none";
        document.getElementById('zero_timermin').style.display = document.getElementById('zero_timermin').textContent < 10 ? "inline" : "none";
        if (timeSec != 59) {
            timeSec++;
            document.getElementById('timer_sec').textContent = timeSec;
        } else {
            timeSec = 0;
            timeMin++;
            document.getElementById('timer_sec').textContent = timeSec;
            document.getElementById('timer_min').textContent = timeMin;
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