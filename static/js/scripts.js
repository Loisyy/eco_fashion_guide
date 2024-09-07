document.addEventListener('DOMContentLoaded', function() {
  const formElement = document.getElementById('signup-form');
  const signupButton = document.getElementById('signup-btn');

  // Ensure that the signup button exists
  if (signupButton && formElement) {
      // Add event listener to the signup button
      signupButton.addEventListener('click', function(event) {
          console.log("Signup button clicked");  // Debugging to confirm the click event is working

          // Prevent default form submission behavior
          event.preventDefault();
      // Get the form field values using their IDs
      const fullName = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const phone = document.getElementById('phone').value;


      // Create a JSON object with the form field values
      const userData = {
        'Full name': fullName,
        'Email': email,
        'Password': password,
        'Phone number': phone
      };
          // Send the form data to the Flask server using fetch
          fetch('/', {
              method: 'POST',
              body: JSON.stringify(userData), // Send JSON object as string
              headers: {
                "Content-type": 'application/json'
              },
              redirect: 'follow' 
          })
          .then(response => {
            if (response.ok) {
              alert('Signup successful!');
            } else {
              alert('Signup failed!');
            }
          })
          .catch(error => {
              // Handle any errors
              console.error("Error:", error);
              alert('Signup failed!');
          });
      });
  }
});

/* Login form Submission */
document.addEventListener('DOMContentLoaded', function() {
  const logformElement = document.getElementById('loginform');
  const loginButton = document.getElementById('login-btn');

  // Ensure that the login button exists
  if (loginButton && logformElement) {
      // Add event listener to the signup button
      loginButton.addEventListener('click', function(event) {
          console.log("Login button button clicked");  // Debugging to confirm the click event is working

          // Prevent default form submission behavior
          event.preventDefault();
      // Get the form field values using their IDs
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;


      // Create a JSON object with the form field values
      const logData = {
        'Email': email,
        'Password': password
      };
          // Send the form data to the Flask server using fetch
          fetch('/', {
              method: 'POST',
              body: JSON.stringify(logData), // Send JSON object as string
              headers: {
                "Content-type": 'application/json'
              },
              redirect: 'follow' 
          })
          .then(response => {
            if (response.ok) {
              alert('Login successful!');
              window.location.href = '/dashboard'; // Manually navigate to the dashboard page
            } else {
              alert('Login failed!');
            }
          })
          .catch(error => {
              // Handle any errors
              console.error("Error:", error);
              alert('Login failed!');
          });
      });
  }
});


/* eye toggler */
function togglePasswordVisibility() {
  const passwordInput = document.getElementById('logpass');
  const eyeIcon = document.querySelector('.eye-icon');
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.add('active');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.remove('active');
  }
}