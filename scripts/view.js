// Ajout de l'horloge 

const horloge = document.getElementById('horloge');

setInterval(() => {
    horloge.textContent = heure_horloge.toString();
}, 1000);

// Ajout du calendrier

const calendrier = document.getElementById('calendrier');

calendrier.textContent = localDate.toString();

// Ajout de l'animation du rectangle

inView('.rectangle').on('enter', function(c){
    c.classList.add('active');

    // Ajout d'une pause de 250ms avant de déclarer les lignes dynamiques
    setTimeout(() => {
        // Ajout des lignes dynamiques
        const lignes = new AnimateLignes('.lignes');
    }, 100);
});