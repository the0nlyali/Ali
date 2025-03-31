// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    // Remove preload class
    setTimeout(() => {
        document.body.classList.remove('is-preload');
    }, 800);

    // Animate certification cards
    const animateCards = () => {
        const certCards = document.querySelectorAll('.cert-card');
        
        certCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.15 });

        certCards.forEach(card => observer.observe(card));
    };

    animateCards();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
