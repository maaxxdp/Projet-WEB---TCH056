const champrecherche = document.querySelector("#recherche");
const checkbox = document.getElementsByName("etat");//prend les 3 boutons et utiliser un switch case pour la fonction
const btnsubmit = document.querySelector("#submit");


const grilleProjet = document.querySelector(".projects-grid");


/*Filtre de recherche*/
btnsubmit.addEventListener("click", Filtre());

function Filtre() {

    
}




/* Affichage dynamique des détails*/
document.addEventListener("DOMContentLoaded",function(){
    //vider la grille
    grilleProjet.innerHTML = "";

    //boucler sur les projets
    projets.forEach(function(projet){
        const carte=document.createElement("div");
        carte.classList.add("project-card");
        //ajoute de l'image
        const img = document.createElement("img");
        img.src = projet.image;
        img.classList.add("project-img");
        //ajout de la ville
        const ville =document.createElement("p");
        ville.textContent = "Ville: "+projet.ville;
        //ajout de la description
        const description = document.createElement("p");
        description.textContent = "Description:" + projet.description;
        //ajout de l'état
        const etat = document.createElement("p");
        etat.textContent = "État: " + projet.etat;

        //ajout du titre
        const titre = document.createElement("h4");
        
        //créer le lien
        const lien = document.createElement("a");
        lien.textContent = projet.titre;
        lien.href = "details.html?id=" + projet.id;

        /**méthode appendChild() pour ajouter chaque élément DANS la carte,
         * puis ajouter la carte dans la grille*/
        titre.appendChild(lien);
        carte.appendChild(img);
        carte.appendChild(titre);
        carte.appendChild(ville);
        carte.appendChild(description);
        carte.appendChild(etat);
        grilleProjet.appendChild(carte);
        
    })
});
