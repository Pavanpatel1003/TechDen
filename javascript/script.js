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
    alert("Login successful!");
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

  // Validation
  if (!fullName) {
    alert("Please enter your full name");
    return;
  }

  if (!email) {
    alert("Please enter your email address");
    return;
  }

  if (!password) {
    alert("Please create a password");
    return;
  }

  if (!confirmPassword) {
    alert("Please confirm your password");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  if (!role) {
    alert("Please select your role");
    return;
  }

  if (!membership) {
    alert("Please choose a membership plan");
    return;
  }

  // Success
  alert("Account created successfully! Welcome to TechDen!");
  
  // Redirect to login page
  window.location.href = "index.html";
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
    document.querySelectorAll('.dropdown-options').forEach(option => {
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
    dropdown.querySelectorAll('.dropdown-option').forEach(option => {
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
    if (!event.target.closest('.custom-dropdown')) {
        document.querySelectorAll('.dropdown-options').forEach(dropdown => {
            dropdown.classList.remove('show');
            dropdown.previousElementSibling.classList.remove('active');
        });
    }
});

// Prevent dropdown from closing when clicking inside
document.querySelectorAll('.dropdown-options').forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
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