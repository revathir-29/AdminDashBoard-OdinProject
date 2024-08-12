const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const closeMenu = document.querySelector('.close');

menu.addEventListener('click', () => {
    sidebar.classList.add('visible');
    closeMenu.style.visibility='visible';
})

closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('visible');
    closeMenu.style.visibility='hidden';
})