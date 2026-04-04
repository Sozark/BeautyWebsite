/* ── Creole Creations | main.js ───────────────────────── */

const hamburger  = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay    = document.getElementById("overlay");

/* Open Menu function */
function openMenu() {
  hamburger.classList.add("active");
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  hamburger.setAttribute("aria-expanded", "true");
}

/* Close Menu function */
function closeMenu() {
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
  hamburger.setAttribute("aria-expanded", "false");
}

/* Hamburger click toggle */
hamburger.addEventListener("click", () => {
  mobileMenu.classList.contains("active") ? closeMenu() : openMenu();
});

/* Keyboard support */
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    mobileMenu.classList.contains("active") ? closeMenu() : openMenu();
  }
});

/* Click overlay to close */
overlay.addEventListener("click", closeMenu);

/* Escape key to close */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

/* Click anywhere outside menu to close */
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});

/* code that ensures that your contact form and boking form will work. */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name    = document.getElementById('name').value;
  const email   = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  window.location.href = `mailto:you@email.com?subject=Message from ${name}&body=${message}`;
});

/* Scroll reveal animation */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.featured, .gallery').forEach(el => observer.observe(el));