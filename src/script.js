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