// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Skip if it's a regular page link
        if (this.getAttribute('href').includes('.html')) return;
        
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    console.log('Form submitted:', { name, email, subject, message });
    alert(`Thanks for your message, ${name}! I'll get back to you soon.`);
    
    // Reset form
    this.reset();
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, #0d1b4c, #8a1919, #0d1b4c)';
        } else {
            header.style.background = 'linear-gradient(135deg, #1a2a6c, #b21f1f, #1a2a6c)';
        }
    }
});

// Simple animation for skill cards
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
    });
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('nav ul');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
}