// Ajout de l'horloge 

const horloge = document.getElementById('horloge');

setInterval(() => {
    horloge.textContent = heure_horloge.toString();
}, 1000);

// Ajout du calendrier

const calendrier = document.getElementById('calendrier');

calendrier.textContent = localDate.toString();

// Ajout des lignes dynamiques

const lignes = new AnimateLignes('.lignes');