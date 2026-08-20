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


/* Check si l'info dans l'URL est valide et appele la fonction si oui */
if (!memoryInfo) {
    console.log("Info en lien invalide");
} else {
    initialization(memoryInfo);
};