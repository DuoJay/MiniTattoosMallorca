const mobileNav = document.querySelector('.mobile-nav');
const menuBurger = document.querySelector('.menu-burger');

function showMobileNav(){
    mobileNav.classList.toggle('toggle-mobile-nav')
}

menuBurger.addEventListener('click', showMobileNav)