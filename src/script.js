const header = document.querySelector('.header');
const banner = document.querySelector('#banner');

window.addEventListener('scroll', function() {
    const triggerHeight = banner.offsetHeight / 2;

    if (window.scrollY > triggerHeight) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

const achButton = document.querySelector('.button span');
const nav = document.querySelector('.achievements-header');

achButton.addEventListener('click', () =>{
    achButton.classList.toggle('open');
    nav.classList.toggle('open');
});

const projNav = document.querySelector('.proj-header');

achButton.addEventListener('click', () =>{
    projNav.classList.toggle('open');
});