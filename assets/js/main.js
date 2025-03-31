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
