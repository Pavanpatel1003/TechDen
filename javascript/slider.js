// Blog Slider Functionality
const blogSlider = {
  currentSlide: 0,
  totalSlides: 3, // Always 3 slides
  isMobile: false,
  
  init() {
    this.track = document.getElementById('blogSliderTrack');
    this.dots = document.querySelectorAll('.slider-dot');
    this.checkScreenSize();
    this.updateSlider();
    this.updateDots();
    
    // Listen for window resize
    window.addEventListener('resize', () => {
      this.checkScreenSize();
      this.updateSlider();
      this.updateDots();
    });
  },
  
  checkScreenSize() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 767;
    
    // Reset slide position if screen size changed
    if (wasMobile !== this.isMobile) {
      this.currentSlide = 0;
    }
  },
  
  goToSlide(slideIndex) {
    if (slideIndex >= 0 && slideIndex < this.totalSlides) {
      this.currentSlide = slideIndex;
      this.updateSlider();
    }
  },
  
  next() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSlider();
  },
  
  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateSlider();
  },
  
  updateSlider() {
    // Each slide is 33.333% width (1/3 of track)
    const translateX = -this.currentSlide * 33.333;
    this.track.style.transform = `translateX(${translateX}%)`;
    
    // Update dots
    this.updateDots();
  },
  
  updateDots() {
    this.dots.forEach((dot, index) => {
      // Show 3 dots for both desktop and mobile
      dot.style.display = index < 3 ? 'block' : 'none';
      dot.classList.toggle('active', index === this.currentSlide);
    });
  }
};

// Initialize slider when page loads
document.addEventListener('DOMContentLoaded', () => {
  blogSlider.init();
  
  // Auto-slide every 5 seconds
  setInterval(() => {
    blogSlider.next();
  }, 5000);
});