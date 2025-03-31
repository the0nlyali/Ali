document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Certification cards interaction
    const certCards = document.querySelectorAll('.cert-card:not(.credly-badge)');
    certCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.backgroundColor = '#006d6d';
            setTimeout(() => {
                this.style.backgroundColor = '#1e1e1e';
            }, 300);
        });
    });

    // Social icons wave animation
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        icon.style.transitionDelay = `${index * 0.1}s`;
    });
});
// Adds loading animation while badges render
document.addEventListener('DOMContentLoaded', () => {
    const certCards = document.querySelectorAll('.cert-card');
    
    certCards.forEach(card => {
        // Show loading placeholder
        if (!card.querySelector('img, iframe')) {
            card.style.background = '#1e1e1e url(./assets/images/loading.gif) no-repeat center';
        }
        
        // Click effects for non-Credly cards
        if (!card.classList.contains('black-card')) {
            card.addEventListener('click', () => {
                card.style.transform = 'scale(0.98)';
                setTimeout(() => card.style.transform = '', 300);
            });
        }
    });
});
