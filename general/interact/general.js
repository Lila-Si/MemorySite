/* Gérer les elements de jeu (score, verifier si les cartes sont egales
   si oui ajouter un et les faire disparaitre, sinon les retourner à nouveau) */
import { randomArray } from "./initialisation";

let score = 0;
let gameOver = false;

const memoryCards = document.getElementsByClassName('memory_cards');

function animFlip () {
    if (gameOver) {
        break;
    };
    /* Animation, checker l'image, si back changer et rotate de 180, else changer et rotate aussi */
};

/* memoryCards.addEventListener("click", () =>{
    if (gameOver) {
        break;
    };
    animFlip();
    if (L'ID des cartes sont égales) {
        +1 au score
        et les faire disparaitre
        if (Dernieres cartes restantes) {
            Petite anim plus message pop-up comme quoi on a gagné
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
        timeSec--;
        if (timeSec <= 0) {
            timeSec = 59;
            timeMin--;
            document.getElementById('timer_min').textContent = timeMin;
        }
        document.getElementById('timer_sec').textContent = timeSec;
        if (timeSec <= 0 && timeMin <= 0) {
            alert('Mince, plus de temps. Vous aurez peut-être plus de chance la prochaine fois !');
            gameOver = true;
            break;
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
        /* Si toutes les cartes trouvées, interrompre le timer */
        timeSec++;
        document.getElementById('timer_sec').textContent = timeSec;
        if (timeSec == 59) {
            timeSec = 0;
            timeMin++;
            document.getElementById('timer_min').textContent = timeMin;
        };
    }, 1000);
};


/* Boutons qui lancent le jeu */
document.getElementById('mode_challenge').addEventListener("click", () => {
    document.getElementById('popup').classList.add('hidden');
    modeChallenge();
});

document.getElementById('mode_normal').addEventListener("click", () => {
    document.getElementById('popup').classList.add('hidden');
    modeNormal();
});