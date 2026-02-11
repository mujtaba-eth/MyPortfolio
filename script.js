// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Select elements to animate
const hiddenElements = document.querySelectorAll('.section-title, .about-text, .about-visual, .project-card, .contact-subtitle, .contact-form, .skill-card');
hiddenElements.forEach((el) => {
    el.classList.add('hidden'); // Add initial hidden class
    observer.observe(el);
});

// Simple Glitch Effect on Hover for Logo
const logo = document.querySelector('.logo');
logo.addEventListener('mouseover', () => {
    logo.style.textShadow = '2px 2px 0px #00ffff, -2px -2px 0px #ff00ff';
});
logo.addEventListener('mouseout', () => {
    logo.style.textShadow = 'none';
});

// Mobile Menu (Simple toggle)
// Note: In a real production app, we'd add the hamburger logic here specifically
console.log("Portfolio loaded. Welcome.");
