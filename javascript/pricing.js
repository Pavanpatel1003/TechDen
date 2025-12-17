// Pricing Section Functionality
document.addEventListener('DOMContentLoaded', () => {
  
  // Toggle functionality
  const monthlyBtn = document.getElementById('monthlyBtn');
  const annuallyBtn = document.getElementById('annuallyBtn');
  let isAnnually = true; // Default state
  
  const monthlyPrices = {
    starter: '$0',
    explorer: '$120',
    growth: '$240',
    enterprise: 'Custom pricing'
  };
  
  const annuallyPrices = {
    starter: '$0',
    explorer: '$100',
    growth: '$200',
    enterprise: 'Custom pricing'
  };
  
  // Update prices based on toggle
  function updatePrices(isAnnuallySelected) {
    const prices = isAnnuallySelected ? annuallyPrices : monthlyPrices;
    const cards = document.querySelectorAll('.pricing-card');
    
    cards.forEach((card, index) => {
      const priceElement = card.querySelector('.price');
      const planNames = ['starter', 'explorer', 'growth', 'enterprise'];
      if (priceElement && planNames[index]) {
        priceElement.textContent = prices[planNames[index]];
      }
    });
  }
  
  // Update toggle button appearance
  function updateToggleButtons(isAnnuallySelected) {
    if (monthlyBtn && annuallyBtn) {
      if (isAnnuallySelected) {
        monthlyBtn.classList.remove('active');
        annuallyBtn.classList.add('active');
      } else {
        monthlyBtn.classList.add('active');
        annuallyBtn.classList.remove('active');
      }
    }
  }
  
  // Toggle event listeners
  if (monthlyBtn) {
    monthlyBtn.addEventListener('click', () => {
      isAnnually = false;
      updatePrices(isAnnually);
      updateToggleButtons(isAnnually);
    });
  }
  
  if (annuallyBtn) {
    annuallyBtn.addEventListener('click', () => {
      isAnnually = true;
      updatePrices(isAnnually);
      updateToggleButtons(isAnnually);
    });
  }
  
  // Initialize with default state (annually)
  updatePrices(isAnnually);
  updateToggleButtons(isAnnually);
  
  // Card selection functionality
  const pricingCards = document.querySelectorAll('.pricing-card');
  
  pricingCards.forEach((card, index) => {
    // Click to select card
    card.addEventListener('click', () => {
      // Remove featured class and button styling from all cards
      pricingCards.forEach(c => {
        c.classList.remove('featured', 'selected');
        const button = c.querySelector('.plan-button');
        if (button) {
          button.classList.remove('plan-button-primary');
          button.classList.add('plan-button-outline');
        }
      });
      
      // Add selected class to clicked card and update button
      card.classList.add('featured', 'selected');
      const selectedButton = card.querySelector('.plan-button');
      if (selectedButton) {
        selectedButton.classList.remove('plan-button-outline');
        selectedButton.classList.add('plan-button-primary');
      }
    });
    
    // Hover effects
    card.addEventListener('mouseenter', () => {
      if (!card.classList.contains('selected')) {
        card.classList.add('hover-featured');
      }
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hover-featured');
    });
  });
  
});