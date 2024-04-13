class AnimateParagraphe {
    constructor(selector) {
        inView(selector).on('enter', function(c) {
            c.classList.add('active');
        });
    }
}
