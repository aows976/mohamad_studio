// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form validation and submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // For now, just show a success message (no backend)
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Simple image gallery modal (for portfolio items)
const portfolioItems = document.querySelectorAll('.portfolio-item img');

portfolioItems.forEach(item => {
    item.addEventListener('click', function () {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            cursor: pointer;
        `;

        const modalImg = document.createElement('img');
        modalImg.src = this.src;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        `;

        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        // Close modal on click
        modal.addEventListener('click', function () {
            document.body.removeChild(modal);
        });
    });
});

// Navbar background change on scroll (darker for visibility)
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 1)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Typing animation for subtitle
const typingText = document.getElementById('typing-text');
const text = "Video Editor, Photographer, Videographer";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML = text.substring(0, index + 1) + '<span class="typing-cursor">|</span>';
        index++;
        setTimeout(typeWriter, 100);
    } else {
        typingText.innerHTML += '<span class="typing-cursor blink">|</span>';
    }
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 15 + 5) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = (Math.random() * 6) + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Apply fade-in animation to sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Mobile tap effect for buttons (on touch devices)
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cta-button, .service-card, .social-link');

    // Tap effect for touch devices
    buttons.forEach(button => {
        button.addEventListener('touchstart', function () {
            this.style.transform = 'scale(0.98)';
        }, { passive: true });

        button.addEventListener('touchend', function () {
            this.style.transform = 'scale(1)';
        }, { passive: true });
    });
});

// Initialize animations on page load
window.addEventListener('load', () => {
    typeWriter();
    createParticles();
}};
