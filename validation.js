const champsmdp = document.querySelector("#password");//zone text mdp
const champscourriel = document.querySelector("#email");//zone de text de email
const champsmdpconf = document.querySelector("#mdp_confirm");//zone de text confiurmation mdp
const champsbtntest = document.querySelector("#submit");

let erreur = [];

function verification(){
    const mdp = champsmdp.value;
    if (mdp.length < 8){
        erreur.push("Le mot de passe est trop petit");
    }else if (mdp.includes(" ")){
        erreur.push("Espace n'est pas permit dans le mot de passe");
    }else if (!mdp.test(/[A-Za-z]/)){
        erreur.push("Il doit y avoir au moins 1 lettre dans le mot de passe");
    }else if (!mdp.test(/[0-9]/)){
        erreur.push("Il doit y avoir au moins 1 chiffre dans le mot de passe");
    }

    const mail = champscourriel.value;
    if (!(/^[^\S@]+@[^\S@]+\.[^\S@]+$/.text(mail))) {
        erreur.push("L'adresse courriel n'est pas une adresse courriel valide");
    }

    const mdpconf = champsmdpconf.value;
    if (mdp !== mdpconf){
        erreur.push("La confirmation du mot de passe n'est pas valide");
    }
}

//function VerificationMDP(mdp) {
    //if (mdp.length < 8 || mdp.includes(" ") || !mdp.test(/[A-Za-z]/) || !mdp.test(/[0-9]/))
  //  if (/^ (?=.*[A-Za-z])(?=.*[0-9])\S{8,}$/.test(mdp)) {//regex -> ? = verifie si suite conforme a condition .* = lettre/chiffre peux se trouver nimporte ou
    //    erreur.push("Le mot de passe est invalide");
      //  }
    //}

//function ValidationMail(mail) {
  //  if (/^[^\S@]+@[^\S@]+\.[^\S@]+$/.text(mail)) {//regex -> ^ = début chaine \ = changele sens caratere apres "s" devient s qui veux dire espace "." devient un . litteral et pas nimporte quel caractere $ =- fin de la chaine
    //    erreur.push("L'adresse courriel n'est pas une adresse courriel valide");
    //}
//}

//function ValidationMDPConfirmation(mdp, mdpconf) {
  //  if (mdp !== mdpconf) {
    //    erreur.push("La confirmation du mot de passe n'est pas valide");
    //}
//}


btntest.addEventListener("click", Verification);
