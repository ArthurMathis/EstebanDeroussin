const horloge = document.getElementById('horloge');

setInterval(() => {
    horloge.textContent = heure_horloge.toString();
}, 1000);

const calendrier = document.getElementById('calendrier');

calendrier.textContent = localDate.toString();