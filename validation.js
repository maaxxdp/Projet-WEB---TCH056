let mdp = document.querySelector("#password").textContent//zone text mdp
let courriel = document.querySelector("#email").textContent//zone de text de email
let mdpconf = document.querySelector("#mdp_confirm").textContent//zone de text confiurmation mdp

function VerificationMDP(mdp) {
    if (mdp.length < 8 || mdp.includes(" ") || !mdp.test(/[A-Za-z]/) || !mdp.test(/[0-9]/)) {
        document.querySelector("#submit").addEventListener("click", () => {

        })
    }
}

function ValidationMail(mail) {
    if (mail.test(/^ [^\s@]+ @ [^\s@]+ \. [^\s@]+ $/)) {//^ = début chaine \ = changele sens caratere apres "s" devient s qui veux dire espace "." devient un . litteral et pas nimporte quel caractere $ =- fin de la chaine

    }
}

function ValidationMDPConfirmation(mdp, mdpconf) {
    if (mdp = mdpconf) {
        
    }
}
