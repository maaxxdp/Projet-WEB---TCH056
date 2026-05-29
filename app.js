const champrecherche = document.querySelector("#recherche");
const checkbox = document.getElementsByName("etat");//prend les 3 boutons et utiliser un switch case pour la fonction
const btnsubmit = document.querySelector("#submit");


btnsubmit.addEventListener("click", Filtre());

function Filtre() {
    
}//il faut attendre que projet.js soit complete pour pouvoir utiliser le json


//creation dynamique projet
function nvxprojet(projet) {
    const division = document.createElement("div");
    division.className = "project-card";
    division.setAttribute("date-ville", projet.ville);//(nomattribut, valeur)
    division.setAttribute("data-etat", projet.etat);

    const image = document.createElement("img");
    image.className = "project-img";
    image.src = projet.image
    image.alt = projet.titre

    const titre = document.createElement("h4");
    const lien =document.createElement("a");
    lien.href = "details.html?id=" + projet.id;
    lien.textContent = projet.titre;
    titre.appendChild(lien);//mets le a dans le h4

    const description = document.createElement("p")
    description.textContent = projet.description

    const ville = document.createElement("p")
    ville.textContent = "Ville: " + projet.ville

    const etat = document.createElement("p")
    etat.textContent = "État: " + projet.etat

    projet.appendChild(image)
    projet.appendChild(titre)
    projet.appendChild(description)
    projet.appendChild(ville)
    projet.appendChild(etat)
}   