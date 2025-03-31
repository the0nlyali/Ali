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
            behavior: 'auto',
            block: 'start'
        });
    }, 500);
});
