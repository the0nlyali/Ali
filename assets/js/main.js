// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    // Remove preload class
    setTimeout(() => {
        document.body.classList.remove('is-preload');
    }, 500);

    // Animate certification cards
    const animateCards = () => {
        const cards = document.querySelectorAll('.cert-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => observer.observe(card));
    };

    animateCards();
});
