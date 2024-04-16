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

// Ajout de la notification de développement
const dev_buttons = document.querySelectorAll('.dev_button');
const dev_notification = document.getElementById('developpement');
dev_buttons.forEach(button => {
    button.addEventListener('click', c => {
        dev_notification.style.display = 'flex';
        const close_button = document.getElementById('dev_notif_close_icon');
        close_button.addEventListener('click', () => {
            dev_notification.style.display = 'none';
        });
    });
});

const paralax = document.getElementsByClassName('paralax');
new simpleParallax(paralax, {
    scale: 1.2
});