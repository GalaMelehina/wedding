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

    const input = document.querySelector('#phone');
    const mask = new Inputmask('+7 (999) 999-99-99');
    mask.mask(input);
    
    // Навигация с эффектом
    const mainNav = document.querySelector('nav');
    
    document.addEventListener('scroll', function () {
        if(window.pageYOffset > 100){
            mainNav.classList.add('scroll');
        }else{
            mainNav.classList.remove('scroll');
        }		
    });
        
    const navIcon = document.querySelector('.nav-icon');
    const nav = document.querySelector('.main-nav__row');
    
    navIcon.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('nav--active');
    });
    
    // Находим ссылки внутри мобильной навигации
    const navLinks = document.querySelectorAll('.main-nav__item');
    
    // Обходим ссылки методом forEach
    navLinks.forEach(function (item) {
        // Для каждой ссылки добавляем прослушку по событию "Клик"
        item.addEventListener('click', function () {
            navIcon.classList.remove('active'); // Убираем активный класс у иконки моб. навигации
            nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
        })
    });
});




          