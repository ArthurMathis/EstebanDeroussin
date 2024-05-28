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

const galerieButton = document.getElementById('galerieButton');
const closeGalerieButton = document.getElementById('closeButton');
const galerie = document.getElementById('galerie');
const body = document.body;

galerieButton.addEventListener('click', () => {
    galerie.style.display = 'block';
    body.style.overflowY = 'hidden';

    setTimeout(() => {
        closeGalerieButton.addEventListener('click', () => {
            galerie.classList.add('disparition');
            setTimeout(() => {
                galerie.style.display = 'none';
                body.style.overflowY = 'auto';
                galerie.classList.remove('disparition');
            }, 800);
        });
    }, 800);
});


// Gestion de la preview
const learnLink = document.getElementById('learn-link');
const preview = document.getElementById('preview');
const projets = preview.querySelectorAll('main .projet');
const intitule = preview.querySelectorAll('.projet-liste ul li');

console.log(intitule);

// On gère la libération du scroll
let isFirstVisible;
let isLastVisible;

// On bloque le défilement de la page
let isBlocked = false;
function scrollGestion(e) {
    if(!isBlocked) {
        preview.scrollTop += e.deltaY;
        if(preview.getBoundingClientRect().top < 85) {
            // On implémente
            isBlocked = true;
            document.body.style.overflow = 'hidden';
            // On remplace la fenêtre
            const yPosition = preview.getBoundingClientRect().top + window.scrollY - 68;
            window.scrollTo(0, yPosition); 
        }
    } else {
        const deltaY = e.deltaY;
        if((deltaY < 0 && isFirstVisible) || (deltaY > 0 && isLastVisible)) {
            isBlocked = false;
            document.body.style.overflow = 'auto';
        }
    }
}
// window.addEventListener('scroll', scrollGestion);
window.addEventListener('wheel', scrollGestion);

/*
Zone de gauche de la preview en position absolute, le scroll reste natif
on ajoute un margin important à la zone de droite
*/