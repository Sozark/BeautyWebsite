/* ── Creole Creations | main.js ───────────────────────── */

/* ── Grab the three menu elements ── */
const hamburger  = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay    = document.getElementById("overlay");

/* ── Open Menu function ── */
function openMenu() {
  hamburger.classList.add("active");
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
  hamburger.setAttribute("aria-expanded", "true");
}

/* ── Close Menu function ── */
function closeMenu() {
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
  hamburger.setAttribute("aria-expanded", "false");
}

/* ── Hamburger click toggle ── */
hamburger.addEventListener("click", () => {
  mobileMenu.classList.contains("active") ? closeMenu() : openMenu();
});

/* ── Keyboard support ── */
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    mobileMenu.classList.contains("active") ? closeMenu() : openMenu();
  }
});

/* ── Click overlay to close ── */
overlay.addEventListener("click", closeMenu);

/* ── Escape key to close ── */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

/* ── Click anywhere outside menu to close ── */
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});

/* ── Contact form handler ── */
/* Wrapped in a check so it only runs on pages that have the form */
/* Without this check, the script crashes on every other page */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name    = document.getElementById("name").value;
    const email   = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    window.location.href = `mailto:you@email.com?subject=Message from ${name}&body=${message}`;
  });
}

/* ── Scroll Reveal ── */
/* rootMargin: "0px 0px -80px 0px" triggers the reveal */
/* 80px before the element reaches the bottom of the screen */
/* threshold: 0 means trigger as soon as any pixel is visible */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0,
  rootMargin: "0px 0px -80px 0px"
});

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));