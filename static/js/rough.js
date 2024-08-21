// Your JSON data
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (event) => {
    const password = form.querySelector('input[name="password"]');
    const confirmPassword = form.querySelector('input[name="confirm_password"]');
    

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      event.preventDefault();
      alert("Passwords do not match!");
    } else if (password && confirmPassword && password.value === confirmPassword.value) {
      event.preventDefault(); // Prevent the default form submission
      
    //Create a FormData object to capture the form data
    const formData = new FormData(form);

// Set up options for the fetch request
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' //Set content type to JSON
  },
        body: JSON.stringify(formData)};

// Make the fetch request with the provided options
    fetch('/create_user', options)
        .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Handle the JSON data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  })
}
})
};
