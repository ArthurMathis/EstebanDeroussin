class AnimateLignes{
    constructor(selector){
        inView.threshold(0.2);
        inView(selector).on('enter', function(c) {
            c.classList.add('active');
        });
    }
}