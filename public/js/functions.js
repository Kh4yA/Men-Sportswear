// Mes fonction 
  /**
   *  fonction qui controle si la longeur est compris entre {number}min et (number)max
   * @param {string} id 
   * @param {object} input
   * @param {string} messageErreur 
   * @param {number} min 
   * @param {number} max 
   * @returns  true ou false
   */
export function testLongueur(min, max, id, input, messageErreur){
    //test la longeur de la chaine entre 2 et 50 caractere
    if(input.value.length<min || input.value.length>=max){
      afficherErreur(id, messageErreur)
      return false
    }else{
      retireErreur(id)
      return true
    }
  }
  /**
   * function qui affiche un message d'erreur
   * @param {string} id 
   * @param {string} messageErreur 
   * retour rien
   */
export  function afficherErreur(id, messageErreur){
    let input = document.getElementById(id)
    input.classList.add('input-error')
    let p = document.getElementById(`error-${id}`)
    p.innerText = messageErreur
    p.classList.remove('d-none')
  }
  /**
   * Fonction qui retire l'erreur
   * @param {string} id 
   * return rien
   */
export  function retireErreur(id){
    let input = document.getElementById(id)
    input.classList.remove('input-error')
    let p = document.getElementById(`error-${id}`)
    p.classList.add('d-none')
  
  }
  /**
   * function qui verifie si l'entrée ne contient pas de caractère non autorisé
   * @param {string} id 
   * @param {object} input 
   * @param {string} messageErreur 
   * @returns afficher une erreur et false / true si pas d'erreur
   */
export  function testIsCaractere (id, input, messageErreur){
   let reg = /^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
   if(reg.test(input.value) === false){
    afficherErreur(id,messageErreur)
    return false
   }else{
    retireErreur(id)
    return true
   }
  }
  /**
   * Function qui verifie qu'il n y a pas d'injection de script
   * @param {string} id 
   * @param {object} input
   * @param {string} messageErreur 
   * @returns erreur si false / true si aps de probleme
   */
export  function noScript (id, input, messageErreur) {
    let reg = /<script>/
    if (reg.test(input.value) === true){
      afficherErreur(id, messageErreur)
      return false
    } else{
      retireErreur(id)
      return true
    }
  }
  /**
   * function qui verifie que le champs n'est pas vide
   * @param {string} id 
   * @param {any} input
   * @param {string} messageErreur 
   * @returns erreur si false / true si pas de vide
   */
export  function isEmpty (id, input, messageErreur) {
    if(input.value===''){
      afficherErreur(id, messageErreur)
      return false
    }else{
      retireErreur(id)
      return true
    }
  }
  /**
   * Fonction qui verifie les emails 
   * @param {string} id 
   * @param {object} input 
   * @returns true si ok / false si erreur 
   */
export  function verifEmail (id, input) {
    let reg = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    if (reg.test(input.value)===false){
      afficherErreur(id,"Vous devez entrer un email valide au format email@exemple.fr")
      return false
    }else{
      retireErreur(id)
      return true
    }
  }
  /**
   * fonction qui verifie si la reference produit a le bon format
   * @param {string} id 
   * @param {string} input 
   * @returns boolean
   */
export function referenceProduit (id, input){
    const reg = /^[a-zA-Z]{3}-\d{6}$/
    if(reg.test(input.value)===false){
        afficherErreur(id, "Ce format n'est pas valide, le format attendu correspond  a : xxx-123456")
        return false
    }else{
        retireErreur(id)
        return true
    }
}