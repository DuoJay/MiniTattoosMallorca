const mobileNav = document.querySelector('.mobile-nav');
const menuBurger = document.querySelector('.menu-burger');
const mobileNavItems = document.querySelectorAll('.mobile-nav__item');
const backdrop = document.querySelector('.backdrop');

function toggleMobileNav(){
    mobileNav.classList.toggle('toggle-mobile-nav');
    menuBurger.classList.toggle('opened');
    toggleBackdrop();
};

function toggleBackdrop (){
    backdrop.classList.toggle('toggle-backdrop');
    setInterval(()=> backdrop.style.display = ('block'),400);
};


backdrop.addEventListener('click', toggleMobileNav);
menuBurger.addEventListener('click', toggleMobileNav);
mobileNavItems.forEach(item => item.addEventListener('click',toggleMobileNav));

const galleryImages = document.querySelectorAll('.gallery__image img');

let imgSrc

galleryImages.forEach((image) =>{
    image.addEventListener("click", (e) =>{
        imgSrc = e.target.src;
        imgModal(imgSrc);
    });
});

let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.querySelector('.gallery__images').append(modal);

    const newImage = document.createElement("img");
    newImage.classList.add('modal__image')
    newImage.setAttribute("src", src);
 
    const closeBtn = document.createElement('i');
    closeBtn.classList.add('fas', 'fa-times', 'closeBtn');
    closeBtn.addEventListener('click', ()=> modal.remove());
    modal.addEventListener('click', ()=> modal.remove());

    modal.append(newImage, closeBtn);
}

