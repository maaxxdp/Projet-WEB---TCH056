let mdp = document.querySelector("#password").value;//zone text mdp
let courriel = document.querySelector("#email").value;//zone de text de email
let mdpconf = document.querySelector("#mdp_confirm").value;//zone de text confiurmation mdp
let btntest = document.querySelector("#submit");
    btntest.addEventListener("click", VerificationMDP);
let erreur = [];

function VerificationMDP(mdp) {
    //if (mdp.length < 8 || mdp.includes(" ") || !mdp.test(/[A-Za-z]/) || !mdp.test(/[0-9]/))
    if (/^ (?=.*[A-Za-z])(?=.*[0-9])\S{8,}$/.test(mdp)) {//regex -> ? = verifie si suite conforme a condition .* = lettre/chiffre peux se trouver nimporte ou
        erreur.push("Le mot de passe est invalide");
        }
    }

function ValidationMail(mail) {
    if (/^[^\S@]+@[^\S@]+\.[^\S@]+$/.text(mail)) {//regex -> ^ = début chaine \ = changele sens caratere apres "s" devient s qui veux dire espace "." devient un . litteral et pas nimporte quel caractere $ =- fin de la chaine
        erreur.push("L'adresse courriel n'est pas une adresse courriel valide");
    }
}

function ValidationMDPConfirmation(mdp, mdpconf) {
    if (mdp !== mdpconf) {
        erreur.push("La confirmation du mot de passe n'est pas valide");
    }
}
