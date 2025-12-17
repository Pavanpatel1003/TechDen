// Testimonials Slider Functionality
const testimonialsSlider = {
  currentSlide: 0,
  totalSlides: 3,
  
  init() {
    this.track = document.getElementById('testimonialsSliderTrack');
    this.updateSlider();
  },
  
  goToSlide(slideIndex) {
    this.currentSlide = slideIndex;
    this.updateSlider();
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
    // Move the track
    const translateX = -this.currentSlide * 33.333;
    this.track.style.transform = `translateX(${translateX}%)`;
  }
};

// Initialize testimonials slider when page loads
document.addEventListener('DOMContentLoaded', () => {
  testimonialsSlider.init();
  
  // Auto-slide every 6 seconds
  setInterval(() => {
    testimonialsSlider.next();
  }, 6000);
});