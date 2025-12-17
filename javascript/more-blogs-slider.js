// More Blogs Slider JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.getElementById('moreBlogsSliderTrack');
    const prevBtn = document.getElementById('moreBlogsPrevBtn');
    const nextBtn = document.getElementById('moreBlogsNextBtn');
    const dots = document.querySelectorAll('.more-blogs-dot');
    
    let currentSlide = 0;
    const totalSlides = 2; // We have 2 slides
    
    // Function to update slider position
    function updateSlider() {
        const translateX = -currentSlide * 100;
        sliderTrack.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Update button states
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }
    
    // Next slide function
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlider();
        }
    }
    
    // Previous slide function
    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    }
    
    // Go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Auto-play functionality (optional)
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            if (currentSlide < totalSlides - 1) {
                nextSlide();
            } else {
                currentSlide = 0;
                updateSlider();
            }
        }, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Start auto-play
    startAutoPlay();
    
    // Pause auto-play on hover
    const sliderContainer = document.querySelector('.more-blogs-slider-container');
    sliderContainer.addEventListener('mouseenter', stopAutoPlay);
    sliderContainer.addEventListener('mouseleave', startAutoPlay);
    
    // Initialize slider
    updateSlider();
    
    // Handle responsive behavior
    function handleResize() {
        // Reset to first slide on resize to avoid layout issues
        currentSlide = 0;
        updateSlider();
    }
    
    window.addEventListener('resize', handleResize);
});