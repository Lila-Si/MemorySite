/* Gérer le bon affiche du memory selon celui cliqué (appel des donnees, affichage) */


/* Imports & variables */
import { memoryOne } from './memories/memoryOne.js';
import { memoryTwo } from './memories/memoryTwo.js';
import { memoryThree } from './memories/memoryThree.js';

const chosenInfo = new URLSearchParams(window.location.search).get('memory');

const memoryInfo = {
    'one': memoryOne,
    'two': memoryTwo,
    'three': memoryThree
}[chosenInfo];


/* Fonctions (initialization & randomArray) */
export function randomArray(memoryArrayRandom) {
    memoryArrayRandom.sort(() => Math.random() - 0.5);
};

function initialization(memoryArray) {

    const divContainer = document.getElementById('cards');

    for (let i = 0; i < memoryArray.length; i++) {

        const img = document.createElement('img');
        img.className = 'memory_cards';
        img.src = '../../images/memoryOne/back.jpg';

        divContainer.appendChild(img);
    };
    randomArray(memoryArray);
};


/* Check l'info dans l'URL */
if (!memoryInfo) {
    console.log("Info en lien invalide");
} else {
    initialization(memoryInfo);
};