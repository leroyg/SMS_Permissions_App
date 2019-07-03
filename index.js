$(window).resize(function(){
    if($(window).width() <= 760){
        $('.hamburger').removeClass('hide');
    } else if($(window).width() >= 780) {
        $('.hamburger').addClass('hide');
    }
});

const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.dropdown');

    burger.addEventListener('click', () => {
        nav.classList.toggle('hide');
        nav.classList.toggle('nav-active');
    });
};

navSlide();