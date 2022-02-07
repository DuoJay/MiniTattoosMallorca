const mobileNav = document.querySelector('.mobile-nav');
const menuBurger = document.querySelector('.menu-burger');
const mobileNavItems = document.querySelectorAll('.mobile-nav__item');
const backdrop = document.querySelector('.backdrop');
const galleryImages = document.querySelectorAll('.insta-image');

function toggleMobileNav(){
    mobileNav.classList.toggle('toggle-mobile-nav');
    menuBurger.classList.toggle('opened');
    toggleBackdrop();
}

function toggleBackdrop (){
    backdrop.classList.toggle('toggle-backdrop');
    setInterval(()=> backdrop.style.display = ('block'),400);
}


backdrop.addEventListener('click', toggleMobileNav);
menuBurger.addEventListener('click', toggleMobileNav);
mobileNavItems.forEach(item => item.addEventListener('click',toggleMobileNav));


function enlargeImage (image){
    image.classList.toggle('close-image');
    image.classList.toggle('open-image');
}


function displayNone (){
    galleryImages.forEach((image => 
        image.classList.toggle('close-image'))
    )}

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        displayNone();
        enlargeImage(image);
    })
})