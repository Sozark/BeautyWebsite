/* Menu Toggle, also the creation of the objects you will be using */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

/* Open Menu Function */
function openMenu() {
  hamburger.classList.add('active');
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  hamburger.setAttribute('aria-explained', 'true');
}

/* Close Menu Function */
function closeMenu() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener("click", () => {
  mobileMenu.classList.contains("active") ? closeMenu() : openMenu();
});

/* Keyboard accessibility for hamburger button */
hamburger.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    mobileMenu.classList.contains('active') ? closeMenu() : openMenu(); 
  }
});

/* Closes menu once dark overlay is clicked */
overlay.addEventListener('click', closeMenu);

/* Closes Menu Once Escape Key is Presssed */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  }
});

