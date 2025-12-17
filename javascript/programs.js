// Programs Page Functionality
document.addEventListener('DOMContentLoaded', () => {
  
  // Program accordion functionality
  const programHeaders = document.querySelectorAll('.program-header');
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  // Handle program accordion clicks
  programHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      
      // Close all other program items
      programHeaders.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.setAttribute('aria-expanded', 'false');
          const otherTarget = otherHeader.getAttribute('data-bs-target');
          const otherCollapse = document.querySelector(otherTarget);
          if (otherCollapse) {
            otherCollapse.classList.remove('show');
          }
        }
      });
      
      // Toggle current item
      header.setAttribute('aria-expanded', !isExpanded);
    });
  });
  
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
  
  // Apply Now Modal Functionality
  const applyButtons = document.querySelectorAll('.program-apply-btn, .btn-cohort-secondary');
  const applyModal = new bootstrap.Modal(document.getElementById('applyModal'));
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  
  // Handle Apply Now button clicks
  applyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      applyModal.show();
    });
  });
  
  // Handle form submission
  const applyForm = document.querySelector('.apply-modal-form');
  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('emailAddress');
    const email = emailInput.value.trim();
    
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      
      // Close first modal
      applyModal.hide();
      
      // Show success modal after a short delay
      setTimeout(() => {
        successModal.show();
      }, 300);
      
      // Reset form
      emailInput.value = '';
    }
  });
  
  // Handle success modal submit button (closes the modal)
  const successSubmitBtn = document.querySelector('.success-submit-btn');
  successSubmitBtn.addEventListener('click', () => {
    successModal.hide();
  });
  
});