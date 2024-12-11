document.addEventListener('DOMContentLoaded', function() {
    // Animate mottos on scroll
    const mottos = document.querySelectorAll('.motto');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2
    });

    mottos.forEach(motto => {
        motto.style.opacity = '0';
        motto.style.transform = 'translateY(20px)';
        motto.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(motto);
    });
});
