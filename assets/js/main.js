/**
 * Portfolio Interactions
 * - Badge loading fallback
 * - Micro-interactions
 * - Performance optimizations
 */

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // ======================
    // 1. Credly Badge Fallback
    // ======================
    const initBadges = () => {
        // Check if any badges failed to load
        const unloadedBadges = document.querySelectorAll('[data-share-badge-id]:empty');
        
        if (unloadedBadges.length > 0) {
            unloadedBadges.forEach(badge => {
                badge.innerHTML = `
                    <a href="https://www.credly.com/badges/${badge.dataset.shareBadgeId}" 
                       target="_blank" 
                       aria-label="View certification">
                        <img src="https://images.credly.com/size/220x220/badges/${badge.dataset.shareBadgeId}/image.webp" 
                             alt="Certification badge" 
                             loading="lazy" 
                             width="150" 
                             height="270">
                    </a>`;
            });
        }
    };

    // Initial check after 2.5s (allows Credly time to load)
    setTimeout(initBadges, 2500);

    // ======================
    // 2. Social Icons Animation
    // ======================
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        // Staggered animation
        icon.style.transitionDelay = `${index * 75}ms`;
        
        // Pulse effect on hover
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-3px) scale(1.1)';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(-3px) scale(1)';
        });
    });

    // ======================
    // 3. Certification Cards
    // ======================
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach(card => {
        // Click feedback
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.96)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        });
        
        // Glow effect on hover
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 8px 25px rgba(0, 163, 163, 0.3)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });

    // ======================
    // 4. Performance Optimizations
    // ======================
    // Lazy load non-critical elements
    if ('loading' in HTMLImageElement.prototype) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    }
});
