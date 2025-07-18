const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Active link + smooth scroll
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active from all links
    navLinks.forEach(l => l.classList.remove('active'));

    // Add active to clicked link
    link.classList.add('active');

    // Smooth scroll to section
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Show/hide scroll to top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollTopBtn.classList.remove("d-none");
  } else {
    scrollTopBtn.classList.add("d-none");
  }
});

// Scroll to top smoothly
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
