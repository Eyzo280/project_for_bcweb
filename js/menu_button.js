const menuBtn = document.querySelector('.menu-btn');
const menuOpenColor = document.querySelector('.header_main_page');
const menuOpenLogo = document.querySelector('.logo');

let menuOpen = false;

menuBtn.addEventListener('click', () => {

    if (menuOpen) {
        menuBtn.classList.remove('open');
        menuOpenColor.classList.remove('openMenu');
        menuOpenLogo.classList.remove('openMenu');
        menuOpen = false;

        $(".header_main_page > .section_wrapper").load('./content.html #firstSection');
    } else {
        menuBtn.classList.add('open');
        menuOpenColor.classList.add('openMenu');
        menuOpenLogo.classList.add('openMenu');
        menuOpen = true;

        $(".header_main_page > .section_wrapper").load('./content.html #menu');
    }
})