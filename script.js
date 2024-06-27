// Abrir y cerrar el menú en pantallas pequeñas
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('change');
    navLinks.classList.toggle('change');
});