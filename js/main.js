// Mobile nav toggle
function toggleNav() {
  const links = document.querySelector('.nav__links');
  links.classList.toggle('open');
}

// Close nav on link click (mobile)
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav__links').classList.remove('open');
  });
});

// Scroll fade-in animations
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .project-card, .skill-group, .strength-card, .highlight').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact form handler
function handleFormSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = 'Thank you! Your message has been noted. I will reply within 24 hours.';
  e.target.reset();
}
