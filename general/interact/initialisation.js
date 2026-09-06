/* Gérer le bon affiche du memory selon celui cliqué (appel des donnees, affichage) */


/* Imports & variables */
import { memoryOne } from './memories/memoryOne.js';
import { memoryTwo } from './memories/memoryTwo.js';
import { memoryThree } from './memories/memoryThree.js';

const chosenInfo = new URLSearchParams(window.location.search).get('memory');

const memory = {
    'one': memoryOne,
    'two': memoryTwo,
    'three': memoryThree
};

const memoryImg = {
    'one': '/images/memoryOne/back.jpg',
    'two': '/images/memoryTwo/back.jpg',
    'three': '/images/memoryThree/back.jpg'
};

export const memoryInfo = memory[chosenInfo];

export const memoryImgBack = memoryImg[chosenInfo];


/* Fonctions (initialization & randomArray) */
export function randomArray(memoryArrayRandom) {
    return [...memoryArrayRandom].sort(() => Math.random() - 0.5);
};

export function initialization(memoryArray) {

    const divContainer = document.getElementById('cards');

    if (!memoryArray) {
        console.error('Tableau vide !');
    };

    for (let i = 0; i < memoryArray.length; i++) {

        const img = document.createElement('img');
        img.className = 'memory_cards';
        img.src = memoryImgBack;

        divContainer.appendChild(img);
    };
};


/* Check l'info dans l'URL */
if (!memoryInfo) {
    console.error("Info en lien invalide");
};