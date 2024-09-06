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


      //Hash the password
      hashed_password = generate_password_hash(password)

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
              window.location.href = '/dashboard'; // Manually navigate to the dashboard page
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
