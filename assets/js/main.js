// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Smart Social Bar Behavior
const socialBar = document.querySelector('.social-footer');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const certsSection = document.querySelector('.certifications');
    
    // Hide bar only when scrolling down past certifications
    if (currentScroll > certsSection.offsetTop + 100) {
        socialBar.classList.toggle('hidden', currentScroll > lastScroll);
    } else {
        socialBar.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});

// Auto-focus certifications on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.certifications').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 500);
});

// Fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => observer.observe(element));
});
