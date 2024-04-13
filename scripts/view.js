// Ajout de l'horloge 
const horloge = document.getElementById('horloge');

setInterval(() => {
    horloge.textContent = heure_horloge.toString();
}, 1000);

// Ajout du calendrier
const calendrier = document.getElementById('calendrier');
calendrier.textContent = localDate.toString();

document.body.style.overflow = 'hidden';

// Ajout de l'animation du rectangle
inView('.rectangle').on('enter', function(c){
    c.classList.add('active');

    // Ajout d'une pause de 600ms (durée de l'animation du rectangle) avant d'ajouter les lignes
    setTimeout(() => {
        // Ajout des lignes dynamiques
        const lignes = new AnimateLignes('.lignes');

        // Ajout d'une pause supplémentaire de 250ms (850ms - 600ms) avant d'ajouter les textes
        setTimeout(() => {
            const texts = new AnimateParagraphe('.fade-in');

            setTimeout(() => {
                const texts = new AnimateParagraphe('.opacity');
                document.body.style.overflow = 'auto';
            }, 600);
        }, 850);
    }, 600);
});