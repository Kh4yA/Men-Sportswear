//import de mes fonction
import {
    afficherErreur,
    isEmpty,
    noScript,
    referenceProduit,
    retireErreur,
    testIsCaractere,
    testLongueur,
    verifEmail,
} from "./functions.js";
// Reccuperation de mes id
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let objetOption = document.getElementById("choix");
let reference = document.querySelector(".reference");
let ref = document.getElementById("ref");
let message = document.getElementById("message");
let monform = document.getElementById("monform");
//pose de mes evenement
nom.addEventListener("change", () => {
    testNom();
});
prenom.addEventListener("change", () => {
    testprenom();
});
email.addEventListener("change", () => {
    testEmail();
});
objetOption.addEventListener("change", (e) => {
    testObjet();
});
ref.addEventListener("change", () => {
    testReference();
});
message.addEventListener("change", () => {
    testMessage();
});
/**
 * Fonction qui test le champs nom
 * @returns boolean
 */
function testNom() {
    if (
        testLongueur(2, 50, "nom", nom, "Ce champs accepte de 2 a 50 caractères") &&
        noScript("nom", nom, "l'injection de script est interdite !") &&
        testIsCaractere(
            "nom",
            nom,
            "Je ne suis pas certain que votre nom comporte des caractères comme cela"
        )
    ) {
        return true;
    } else {
        return false;
    }
}
/**
 * Fonction qui test le champ prenom
 * @returns boolean
 */
function testprenom() {
    if (
        testLongueur(
            2,
            50,
            "prenom",
            prenom,
            "Ce champs accepte de 2 a 50 caractères"
        ) &&
        noScript("prenom", prenom, "l'injection de script est interdite !") &&
        testIsCaractere(
            "prenom",
            prenom,
            "Je ne suis pas certain que votre prénom comporte des caractères comme cela"
        )
    ) {
        return true;
    } else {
        return false;
    }
}
/**
 * Fonction qui test le champ email
 * @returns boolean
 */
function testEmail() {
    if (verifEmail("email", email)) {
        return true;
    } else {
        return false;
    }
}
/**
 * Function qui test l'option selectionner
 * @returns boolean
 */
function testObjet() {
    if (objetOption.value === "") {
        afficherErreur("choix", "Vous devez selectionner une option");
        return false;
    } else if (objetOption.value !== "") {
        retireErreur("choix");
        if (objetOption.value == "pb-pro" || objetOption.value == "info-pro") {
            reference.classList.remove("d-none");
        } else {
            reference.classList.add("d-none");
        }
        return true;
    }
}
/**
 * Fonction qui test si la reference a le bon format si les options produit sont coché
 * @returns boolean
 */
function testReference() {
    if (objetOption.value == "pb-pro" || objetOption.value == "info-pro") {
        if (
            referenceProduit("ref", ref) &&
            isEmpty(
                "ref",
                ref,
                "Ce champs ne peut être vide vous devez entrer la reférence indiqué sur le produit"
            )
        ) {
            return true;
        } else {
            return false;
        }
    }else{
        return true
    }
}
/**
 * fonction qui regarde si il y a un message
 * @returns  boolean
 */
function testMessage() {
    if (
        isEmpty(
            "message",
            message,
            "Veuillez nous indiquer votre message pour un meilleur traitement"
        ) &&
        noScript("message", message, "Vous ne pouvez pas entrez de script ici") &&
        testLongueur(
            20,
            500,
            "message",
            message,
            "Votre message doit être entre 20 et 500 caractères"
        )
    ) {
        return true;
    } else {
        return false;
    }
}
monform.addEventListener("submit", (e) => {
    e.preventDefault();
    let test1 = testNom();
    let test2 = testprenom();
    let test3 = testEmail();
    let test4 = testObjet();
    let test5 = testReference();
    let test6 = testMessage();
    console.log(test1);
    console.log(test2);
    console.log(test3);
    console.log(test4);
    console.log(test5);
    console.log(test6);
    if (
        test1 === false &&
        test2 === false &&
        test3 === false &&
        test4 === false &&
        test5 === false &&
        test6 === false
    ) {
        return false;
    } else {
        return true;
    }
});
