const modal = document.getElementById('signup-modal');
const form = document.querySelector("#signup-btn");
if (form) {
// Add event listener to the signup button
form.addEventListener('click', function(event) {
  // Prevent default form submission
  event.preventDefault();
})

 // Get the form data
 const formData = new FormData(form);

  // Send the form data to the server
  fetch('/signup', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => {
    // Handle the response data
    console.log(data);
    // Close the modal
    modal.classList.remove('show');
    // Show a success message
    alert('Signup successful!');
     // Redirect to the dashboard page
     window.location.href = '/dashboard';
})
.catch(error => {
    // Handle the error
    console.error(error);
    // Show an error message
    alert('Signup failed!');
});

// Add event listener to the modal close button
document.querySelector('.btn-close').addEventListener('click', function() {
  // Close the modal
  modal.classList.remove('show');
});
}
