// FAQ Page Functionality
document.addEventListener('DOMContentLoaded', () => {
  
  // FAQ accordion functionality
  const faqQuestions = document.querySelectorAll('.faq-main-question');
  
  // Handle FAQ accordion clicks
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      
      // Close all other FAQ items
      faqQuestions.forEach(otherQuestion => {
        if (otherQuestion !== question) {
          otherQuestion.setAttribute('aria-expanded', 'false');
          const otherTarget = otherQuestion.getAttribute('data-bs-target');
          const otherCollapse = document.querySelector(otherTarget);
          if (otherCollapse) {
            otherCollapse.classList.remove('show');
          }
        }
      });
      
      // Toggle current item
      question.setAttribute('aria-expanded', !isExpanded);
    });
  });
  
  // Handle Bootstrap collapse events for smooth arrow rotation
  document.addEventListener('shown.bs.collapse', (e) => {
    const trigger = document.querySelector(`[data-bs-target="#${e.target.id}"]`);
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
  
  document.addEventListener('hidden.bs.collapse', (e) => {
    const trigger = document.querySelector(`[data-bs-target="#${e.target.id}"]`);
    if (trigger) {
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
  
});