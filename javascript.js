// +++++ bannière au début +++++

// localiser les docs pour les slides
let slides = document.querySelectorAll(".slide");

// identifier la première slide
let numero = 0;

// changer de slide si requête
function afficherSlide(nouveauNumero) {
    // cacher la slide en enlevant son tag active
    slides[numero].classList.remove("active");

    numero = nouveauNumero;

    // revenir a la premire slide
    if (numero >= slides.length) {
        numero = 0;
    }

    // si on est a la premiere slide, la fleche de gauche faire revenir derniere slide
    if (numero < 0) {
        numero = slides.length - 1;
    }

    // afficher la nvle slide avec le tag
    slides[numero].classList.add("active");
}

// L'IA A FAIT LES CETTE FONCTION POUR MOI, JE NE SAVAIS PAS COMMENT LA FAIRE MAIS JE L'AI COMPRISE MAINTENANT
// Toutes les 5 secondes (5000 millisecondes), on passe à la slide suivante
setInterval(function () {
    afficherSlide(numero + 1);
}, 5000);

// fleche droite
document.getElementById("suivant").addEventListener("click", function () {
    afficherSlide(numero + 1);
});

// fleche gauche
document.getElementById("precedent").addEventListener("click", function () {
    afficherSlide(numero - 1);
});

// +++++ formulaire +++++

let formulaire = document.getElementById("formulaire-contact");
let message = document.getElementById("message");

// quand "Envoyer" est cliqué :
formulaire.addEventListener("submit", function (event) {
    // en vérifiant mon JS l'IA m'a conseillé de rajouter cette ligne
    event.preventDefault();

    // pour récupèrer les data des réponses
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let commentaire = document.getElementById("commentaire").value;

    // erreur si un champ est laisser vide
    if (nom === "" || prenom === "" || email === "" || commentaire === "") {
        message.textContent = "Merci de remplir tous les champs.";
        message.className = "erreur";
        return;
    }

    // erreur si il n'y a pas de @ dans l'adresse
    if (!email.includes("@")) {
        message.textContent = "L'adresse e-mail n'est pas valide.";
        message.className = "erreur";
        return;
    }
    // L'IA A FAIT LES 3 LIGNES SUIVANTES POUR MOI, JE NE SAVAIS PAS COMMENT LES FAIRE MAIS JE LES AI COMPRISES MAINTENANT
    // On prépare le sujet et le texte de l'e-mail
    let sujet = "Contact portfolio - " + prenom + " " + nom;
    let texte = commentaire + "\n\n" + prenom + " " + nom + " (" + email + ")";

    // On ouvre la messagerie du visiteur avec un lien "mailto:".
    // encodeURIComponent transforme les espaces, accents et retours à la ligne
    // pour qu'ils puissent être mis dans un lien.
    window.location.href = "mailto:gasp.piffaut@gmail.com?subject=" + encodeURIComponent(sujet) + "&body=" + encodeURIComponent(texte);

    // message de confirmation si succès
    message.textContent = "Votre messagerie va s'ouvrir avec votre message, il ne reste plus qu'à cliquer sur Envoyer.";
    message.className = "succes";
});
