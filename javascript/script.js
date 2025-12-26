// =========================
// TECH DEN LOGIN PAGE
// JAVASCRIPT START
// =========================

function login() {
  const email = document.getElementById("emailInput").value;
  const mobile = document.getElementById("mobileInput").value;
  const password = document.getElementById("password").value;

  if (!password) {
    alert("Please enter password");
    return;
  }

  if (email || mobile) {
    alert("Login successful! Welcome to TechDen!");
    // Redirect to coming-soon page after successful login
    window.location.href = "coming-soon.html";
  } else {
    alert("Please enter Email or Mobile number");
  }
}

// =========================
// TECH DEN LOGIN PAGE
// JAVASCRIPT END
// =========================
// =========================
// TECH DEN SIGNUP PAGE
// JAVASCRIPT START
// =========================

function createAccount() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const role = document.getElementById("role").value;
  const membership = document.getElementById("membership").value;
  const termsCheck = document.getElementById("termsCheck").checked;

  // Validation
  if (!fullName.trim()) {
    showAlert("Please enter your full name", "error");
    return;
  }

  if (!email.trim()) {
    showAlert("Please enter your email address", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showAlert("Please enter a valid email address", "error");
    return;
  }

  if (!password) {
    showAlert("Please create a password", "error");
    return;
  }

  if (password.length < 8) {
    showAlert("Password must be at least 8 characters long", "error");
    return;
  }

  if (!confirmPassword) {
    showAlert("Please confirm your password", "error");
    return;
  }

  if (password !== confirmPassword) {
    showAlert("Passwords do not match", "error");
    return;
  }

  if (!role) {
    showAlert("Please select your role", "error");
    return;
  }

  if (!membership) {
    showAlert("Please choose a membership plan", "error");
    return;
  }

  if (!termsCheck) {
    showAlert("Please agree to the Terms of Service and Privacy Policy", "error");
    return;
  }

  // Show loading state
  const button = document.querySelector('.signup-btn');
  button.classList.add('loading');
  button.textContent = 'Creating Account...';

  // Simulate API call
  setTimeout(() => {
    button.classList.remove('loading');
    button.textContent = 'Create Account';
    
    showAlert("Account created successfully! Welcome to TechDen!", "success");
    
    // Redirect to login page after 2 seconds
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  }, 2000);
}

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password toggle functionality
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const eyeIcon = document.getElementById(inputId + '-eye');
  
  if (input.type === 'password') {
    input.type = 'text';
    eyeIcon.classList.remove('fa-eye');
    eyeIcon.classList.add('fa-eye-slash');
  } else {
    input.type = 'password';
    eyeIcon.classList.remove('fa-eye-slash');
    eyeIcon.classList.add('fa-eye');
  }
}

// Alert function
function showAlert(message, type) {
  // Remove existing alerts
  const existingAlert = document.querySelector('.custom-alert');
  if (existingAlert) {
    existingAlert.remove();
  }

  // Create alert element
  const alert = document.createElement('div');
  alert.className = `custom-alert alert-${type}`;
  alert.innerHTML = `
    <div class="alert-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
      <span>${message}</span>
    </div>
  `;

  // Add styles
  alert.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 10000;
    min-width: 300px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    background: ${type === 'success' ? '#10b981' : '#ef4444'};
  `;

  // Add to body
  document.body.appendChild(alert);

  // Animate in
  setTimeout(() => {
    alert.style.transform = 'translateX(0)';
  }, 100);

  // Remove after 5 seconds
  setTimeout(() => {
    alert.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (alert.parentNode) {
        alert.parentNode.removeChild(alert);
      }
    }, 300);
  }, 5000);
}

// =========================
// TECH DEN SIGNUP PAGE
// JAVASCRIPT END
// =========================
// =========================
// CUSTOM DROPDOWN FUNCTIONALITY
// =========================

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const selected = dropdown.previousElementSibling;
    
    // Close all other dropdowns
    document.querySelectorAll('.dropdown-options, .signup-dropdown-options').forEach(option => {
        if (option.id !== dropdownId) {
            option.classList.remove('show');
            option.previousElementSibling.classList.remove('active');
        }
    });
    
    // Toggle current dropdown
    dropdown.classList.toggle('show');
    selected.classList.toggle('active');
}

function selectOption(inputId, value, text) {
    // Update hidden input value
    document.getElementById(inputId).value = value;
    
    // Update selected text
    const selectedText = document.getElementById(inputId + 'Selected');
    selectedText.textContent = text;
    selectedText.classList.add('has-value');
    
    // Update selected option styling
    const dropdown = document.getElementById(inputId + 'Dropdown');
    dropdown.querySelectorAll('.dropdown-option, .signup-dropdown-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    event.target.classList.add('selected');
    
    // Close dropdown
    dropdown.classList.remove('show');
    dropdown.previousElementSibling.classList.remove('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.custom-dropdown') && !event.target.closest('.signup-custom-dropdown')) {
        document.querySelectorAll('.dropdown-options, .signup-dropdown-options').forEach(dropdown => {
            dropdown.classList.remove('show');
            dropdown.previousElementSibling.classList.remove('active');
        });
    }
});

// Prevent dropdown from closing when clicking inside
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dropdown-options, .signup-dropdown-options').forEach(dropdown => {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});

// =========================
// CUSTOM DROPDOWN END
// =========================
// =========================
// COMING SOON PAGE FUNCTIONALITY
// =========================

function subscribe() {
  const email = document.getElementById("emailSubscribe").value;

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email) {
    alert("Please enter your email address");
    return;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Success message
  alert("Thank you for subscribing! We'll notify you when TechDen launches.");
  
  // Clear the input
  document.getElementById("emailSubscribe").value = "";
}

// =========================
// COMING SOON FUNCTIONALITY END
// =========================