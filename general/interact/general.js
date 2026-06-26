let score = 0;

function Initialization() {
    /* Boucle for selon le array conteneur des données, action = afficher l'image à chaque fois */
    /* ! Pas oublier que l'image au dos est la même pour toutes celles du lot */
    /* ! Au lieu de trente mille lignes img dans le html, plutôt crée dynamiquement la ligne en même temps que lui attribué son image.
    Comme ça ça s'adapte sans soucis en cas de modifications, d'ajouts ou suppression de cartes. */
    /* Pas oublier de faire en sorte que les cartes se trient aléatoirement */
};

/* Pop-up avec rappel des règles puis donne le choix entre un mode challenge (temps limité, à rebours) et normal */
if (/* mode challenge choisi -bouton correspondant cliqué-) */) {
    /* Appeler la fonction du timer correspondant */
} else {
    /* Idem */
};

/* Fonction timer 1 */
function mchallenge() {
    if (/* timer arrive à la fin avant que le joueur est fini */) {
        /* Arrêter le jeu est mettre un message plus option pour retourner à l'accueil -au clic ou au bout de 10s- */
    };
};

/* Fonction timer 2 */
function mnormal() {
    
};

document.getElementsByClassName("memoryCards").addEventListener("click", () =>{
    /* Animation (les cartes se retournent face visible) lancée au click - pas oublier d'aller chercher et mettre l'image associée - */
    if (/* L'ID des cartes sont égales */) {
        if (/* Dernieres cartes restantes */) {
            /* Petite anim plus message pop-up comme quoi on a gagné, plus option pour retourner à l'accueil -au clic ou au bout de 10s- */
        } else {
            /* Petite anim */
            /* Supprimer les cartes et ajouter un au score */
        };
    } else {
        /* Retourner de nouveau les cartes */
    };
});

/* Appel des ressources selon bouton cliqué */
/* Voir si y'a pas moyen d'ajouter une boucle pour pas avoir trois fois le même code */
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