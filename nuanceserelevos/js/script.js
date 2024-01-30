const burger = document.querySelector('.burger');

const navLinks = document.querySelector('.mobile-nav-links');

const links = document.querySelectorAll('.mobile-nav-links li');

const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    body.classList.toggle('no-scroll');
    burger.classList.toggle('active');
}) 