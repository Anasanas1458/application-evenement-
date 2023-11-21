// Récupération des événements depuis le fichier JSON
const reponseEvenements = await fetch('evenements.json');
const evenements = await reponseEvenements.json();

// Sélection du premier événement (à adapter en fonction de tes besoins)
const evenement = evenements[0];

// Création des balises
const imageElementEvenement = document.createElement("img");
imageElementEvenement.src = evenement.originalimage;

const titreElement = document.createElement("h2");
titreElement.innerText = evenement.title_fr;

const dateElement = document.createElement("p");
dateElement.innerText = `Date & heure: ${evenement.daterange_fr}`;

const descriptionElementEvenement = document.createElement("p");
descriptionElementEvenement.innerText = evenement.description_fr ?? "Pas de description pour le moment.";

const lieuElement = document.createElement("p");
lieuElement.innerText = `Lieu: ${evenement.location_name}, ${evenement.location_city}, ${evenement.location_region}`;

// Rattachement de nos balises au DOM
const sectionEvenements = document.querySelector(".evenements");
sectionEvenements.appendChild(imageElementEvenement);
sectionEvenements.appendChild(titreElement);
sectionEvenements.appendChild(dateElement);
sectionEvenements.appendChild(descriptionElementEvenement);
sectionEvenements.appendChild(lieuElement);
