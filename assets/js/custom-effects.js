/*******************************************************************************
 * Custom JavaScript Effects for Enhanced User Experience
 * Adds modern interactions and animations to the academic website
 ******************************************************************************/

(function() {
    'use strict';

    // =============================================================================
    // 1. BACK TO TOP BUTTON
    // =============================================================================
    
    function initBackToTop() {
        // Create back to top button
        const backToTop = document.createElement('a');
        backToTop.href = '#';
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '↑';
        backToTop.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(backToTop);

        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        // Smooth scroll to top
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // =============================================================================
    // 2. NAVBAR SCROLL EFFECT
    // =============================================================================
    
    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // =============================================================================
    // 3. SMOOTH SCROLLING FOR ANCHOR LINKS
    // =============================================================================
    
    function initSmoothScrolling() {
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
    }

    // =============================================================================
    // 4. INTERSECTION OBSERVER FOR ANIMATIONS
    // =============================================================================
    
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.publication-card, .glass-card, .project-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // =============================================================================
    // 5. TYPING ANIMATION FOR HERO TEXT
    // =============================================================================
    
    function initTypingAnimation() {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;

        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #57068c';
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        // Start typing animation after a short delay
        setTimeout(typeWriter, 500);
    }

    // =============================================================================
    // 6. PARALLAX EFFECT
    // =============================================================================
    
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.hero-parallax');
        
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // =============================================================================
    // 7. LOADING ANIMATION
    // =============================================================================
    
    function initLoadingAnimation() {
        // Add loading class to body
        document.body.classList.add('loading');
        
        // Remove loading class when page is fully loaded
        window.addEventListener('load', function() {
            document.body.classList.remove('loading');
        });
    }

    // =============================================================================
    // 8. ENHANCED FORM INTERACTIONS
    // =============================================================================
    
    function initFormEnhancements() {
        const inputs = document.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Add focus/blur effects
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }

    // =============================================================================
    // 9. COPY TO CLIPBOARD FOR CODE BLOCKS
    // =============================================================================
    
    function initCopyToClipboard() {
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach(block => {
            const button = document.createElement('button');
            button.className = 'copy-btn';
            button.textContent = 'Copy';
            button.setAttribute('aria-label', 'Copy code to clipboard');
            
            const pre = block.parentElement;
            pre.style.position = 'relative';
            pre.appendChild(button);
            
            button.addEventListener('click', function() {
                navigator.clipboard.writeText(block.textContent).then(() => {
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                });
            });
        });
    }

    // =============================================================================
    // 10. DARK MODE TOGGLE (DISABLED)
    // =============================================================================
    
    // Dark mode toggle functionality removed to avoid unwanted UI elements

    // =============================================================================
    // INITIALIZATION
    // =============================================================================
    
    // Initialize all effects when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initBackToTop();
        initNavbarScroll();
        initSmoothScrolling();
        initScrollAnimations();
        initTypingAnimation();
        initParallax();
        initLoadingAnimation();
        initFormEnhancements();
        initCopyToClipboard();
        // initDarkModeToggle(); // Disabled
    });

})();
