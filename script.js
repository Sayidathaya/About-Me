// script.js

// Smooth scroll effect for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade-in animation when sections enter the viewport
const faders = document.querySelectorAll('.panel, .card, .link-card');

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
