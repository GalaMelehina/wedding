$(document).ready(function () {

    MicroModal.init({
        disableScroll: true,
        awaitOpenAnimation: true,
        awaitCloseAnimation: true,
    });
    
    const photoCarousel = $('#customer-slider');

    photoCarousel.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
    });

    const btnPrev = $('.nav-btn-left');
    const btnNext = $('.nav-btn-right');

    btnPrev.click(function () {
        photoCarousel.trigger('prev.owl.carousel');
    });


    btnNext.click(function () {
        photoCarousel.trigger('next.owl.carousel');
    });
});

const input = document.querySelector('#phone');
const mask = new Inputmask('+7 (999) 999-99-99');
mask.mask(input);


          