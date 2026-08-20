/* Gérer le bon affiche du memory selon celui cliqué (appel des donnees, affichage) */


/* Imports & variables */
import { memoryOne } from './memories/memoryOne.js';
import { memoryTwo } from './memories/memoryTwo.js';
import { memoryThree } from './memories/memoryThree.js';

/* const memoryOneEvent = document.getElementById('memoryone');
const memoryTwoEvent = document.getElementById('memorytwo');
const memoryThreeEvent = document.getElementById('memorythree'); */

const memoryInfo = {
    'one' : memoryOne,
    'two' : memoryTwo,
    'three' : memoryThree
};


/* Fonction initialisation des cartes et triage aleatoire */
function initialization(memory) {

    const divContainer = document.getElementById('cards');

    for (let i = 0; i < memory.length; i++) {
        const img = document.createElement('img');
        img.src = '../../images/memoryOne/back.jpg';

        divContainer.appendChild(img);
        /* Affiche le dos des cartes, le nombre qu'il y en a, creer pour ca des img dans la div correspondante */
    };
    /* Faire ensuite en sorte que les cartes se trient aléatoirement */
};


if (!memoryInfo) {
    console.log("Info en lien invalide");
} else {
    initialization(memoryInfo);
};

/* Appel des ressources selon bouton cliqué */
/* memoryOneEvent.addEventListener("click", () =>{
    initialization(memoryOne)
    console.log("Bouton memory un cliqué. Appel fonction initialization.");
});

memoryTwoEvent.addEventListener("click", () =>{
    initialization(memoryTwo);
    console.log("Bouton memory deux cliqué. Appel fonction initialization.");
});

memoryThreeEvent.addEventListener("click", () =>{
    initialization(memoryThree);
    console.log("Bouton memory trois cliqué. Appel fonction initialization.");
}); */