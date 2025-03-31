/**
 * Main Website Script - Optimized
 */
document.addEventListener('DOMContentLoaded', () => {
    // Remove preload class
    setTimeout(() => {
        document.body.classList.remove('is-preload');
    }, 500);

    // Simple card animation
    const animateCards = () => {
        const cards = document.querySelectorAll('.cert-card');
        let delay = 100;
        
        cards.forEach(card => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, delay);
            delay += 100;
        });
    };

    // Run animations when page loads
    animateCards();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
