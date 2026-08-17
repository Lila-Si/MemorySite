/* Gérer le bon affiche du memory selon celui cliqué (appel des donnees, affichage) */

function initialization(memory) {
    for (let i = 0; i < memory.length; i++) {
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

/* Importer selon le bouton cliqué (pour faire moins lourd) */
import { memoryOne } from "./donnees_memories/memory_un";
import { memoryTwo } from "./donnees_memories/memory_deux";
import { memoryThree } from "./donnees_memories/memory_trois";