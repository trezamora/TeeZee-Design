document.addEventListener('DOMContentLoaded', function () {

    /* TOGGLE NAV MOBILE MENU FOR SMALL SCREENS */
    const menubuton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubuton.addEventListener('click', function () {
        if (menunav.getAttribute('data-navstate') === 'open') {
            /* if true do this */
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            /* else (if false) do this */
            menunav.setAttribute('data-navstate', 'open');
        };
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    render: 'svg',
    loop: true,
    autoplay: true,
    path: 'js/data.json'
})
