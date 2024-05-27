// Ajout de l'horloge 
const horloge = document.getElementById('horloge');

setInterval(() => {
    horloge.textContent = heure_horloge.toString();
}, 1000);

// Ajout du calendrier
const calendrier = document.getElementById('calendrier');
calendrier.textContent = localDate.toString();

// Empêche le défilement horizontal initialement
body.style.overflowX = 'hidden';

// Ajout de l'animation du rectangle
inView('.rectangle').on('enter', function(c){
    c.classList.add('active');

    // Ajout d'une pause de 600ms (durée de l'animation du rectangle) avant d'ajouter les lignes
    setTimeout(() => {
        // Ajout des lignes dynamiques
        // const lignes = new AnimateLignes('.lignes');
        const lignes = new AnimateItems('.lignes');

        // Ajout d'une pause supplémentaire de 250ms (850ms - 600ms) avant d'ajouter les textes
        setTimeout(() => {
            // const texts = new AnimateParagraphe('.fade-in');
            const texts = new AnimateItems('.fade-in');

            setTimeout(() => {
                // const texts = new AnimateParagraphe('.opacity');
                const texts = new AnimateItems('.opacity');
                document.body.style.overflow = 'auto';
            }, 600);
        }, 850);
    }, 600);
});

// Ajout de l'effet parallax sur les images portant la classe parallax
const paralax = document.getElementsByClassName('parallax');
new simpleParallax(paralax, {
    scale: 1.225
});


// Surveille les changements de style sur le corps de la page
const observer = new MutationObserver((mutationsList) => {
    // Parcourt chaque mutation
    for (let mutation of mutationsList) {
        // Vérifie si la propriété 'overflow-x' a été modifiée
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const newValue = body.style.overflowX;
            // Si la valeur est différente de 'hidden', réapplique 'hidden'
            if (newValue !== 'hidden') {
                body.style.overflowX = 'hidden';
            }
        }
    }
});

// Définit les options pour l'observateur
const observerOptions = { attributes: true };
// Commence à observer les changements de style sur le corps de la page
observer.observe(body, observerOptions);
