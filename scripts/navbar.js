const menuToggle = document.getElementById('menu-toggle');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  menuOpen.classList.toggle('hidden');
  menuClose.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
});
