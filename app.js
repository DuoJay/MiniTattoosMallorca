const mobileNav = document.querySelector('.mobile-nav');
const menuBurger = document.querySelector('.menu-burger');
const mobileNavItems = document.querySelectorAll('.mobile-nav__item')

function toggleMobileNav(){
    mobileNav.classList.toggle('toggle-mobile-nav')
}



menuBurger.addEventListener('click', toggleMobileNav);
mobileNavItems.forEach(mobileNavItem  => mobileNavItem.addEventListener('click',toggleMobileNav));