/* Gérer le bon affiche du memory selon celui cliqué (appel des donnees, affichage) */

/* Importer selon le bouton cliqué (pour faire moins lourd) */
import { memoryOne } from './memories/memoryOne';
import { memoryTwo } from './memories/memoryTwo';
import { memoryThree } from './memories/memoryThree';

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

/* Appel des ressources selon bouton cliqué */
document.getElementById("memoryOne").addEventListener("click", () =>{
    initialization(memoryOne)
    console.log("Bouton memory un cliqué. Appel fonction initialization.");
});

document.getElementById("memoryTwo").addEventListener("click", () =>{
    initialization(memoryTwo);
    console.log("Bouton memory deux cliqué. Appel fonction initialization.");
});

document.getElementById("memoryThree").addEventListener("click", () =>{
    initialization(memoryThree);
    console.log("Bouton memory trois cliqué. Appel fonction initialization.");
});