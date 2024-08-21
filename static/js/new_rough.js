 // Example form validation for sign-up/sign-in pages
 const form = document.querySelector("form");
 if (form) {
   form.addEventListener("submit", (event) => {
     const password = form.querySelector('input[name="password"]');
     const confirmPassword = form.querySelector(
       'input[name="confirm_password"]'
     );

     if (
       password &&
       confirmPassword &&
       password.value !== confirmPassword.value
     ) {
       event.preventDefault();
       alert("Passwords do not match!");
     }
   });
 }
}; 