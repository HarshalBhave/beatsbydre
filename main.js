let header = document.querySelector('header');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY > 0);
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    dealy: 400,
    // reset: true
})

sr.reveal('.home-text,.buds-text' ,{origin: 'left'})
sr.reveal('.home-img,.buds-img' ,{origin: 'right'})
sr.reveal('.heading' ,{dealy: 200})
sr.reveal('.specs-details .box' ,{origin: 'left', interval:200})
sr.reveal('.specs-img' ,{dealy: 600})
sr.reveal('.shop-container .box,.footer .logo,.footer .footer-box' ,{interval: 200})

