// Contact Page Functionality
document.addEventListener('DOMContentLoaded', () => {
  
  // Contact form submission
  const contactForm = document.querySelector('.contact-form');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const fullName = document.getElementById('fullName').value.trim();
    const emailAddress = document.getElementById('emailAddress').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!fullName || !emailAddress || !message) {
      alert('Please fill in all fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', {
      name: fullName,
      email: emailAddress,
      message: message
    });
    
    // Show success message
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    contactForm.reset();
  });
  
  // Smooth scroll for header buttons
  const headerButtons = document.querySelectorAll('.btn-contact-primary, .btn-contact-secondary');
  
  headerButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const href = button.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
});