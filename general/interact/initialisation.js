/* Gérer le bon affiche du memory selon celui cliqué (appel des donnees, affichage) */

/* Doit disposer en aleatoire !!!!!!!!!! */

/* Appel des ressources selon bouton cliqué */
document.getElementById("memoryOne").addEventListener("click", () =>{
    Initialization(memoryOne);
    console.log("Bouton memory trois cliqué. Appel fonction initialization.");
});

document.getElementById("memoryTwo").addEventListener("click", () =>{
    Initialization(memoryTwo);
    console.log("Bouton memory trois cliqué. Appel fonction initialization.");
});

document.getElementById("memoryThree").addEventListener("click", () =>{
    Initialization(memoryThree);
    console.log("Bouton memory trois cliqué. Appel fonction initialization.");
});

/* Importer selon le bouton cliqué (pour faire moins lourd) */
import { memoryOne } from "./donnees_memories/memory_un";
import { memoryTwo } from "./donnees_memories/memory_deux";
import { memoryThree } from "./donnees_memories/memory_trois";