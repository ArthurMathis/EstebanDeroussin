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