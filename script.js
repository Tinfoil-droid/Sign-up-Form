document.addEventListener("DOMContentLoaded", function () {
  // Get references to the form and error element
  let form = document.querySelector("form");
  let error = document.querySelector("#error");

  // Attach an event listener to the form's submit event
  form.addEventListener("submit", function (event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Get the values of the password fields
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;

    // Check if the passwords match
    if (password !== confirmPassword) {
      error.innerHTML = "* Passwords do not match";
    } else {
      // Clear the error message if passwords match
      error.innerHTML = "";
      // Submit the form if the passwords match (you might want to add this)
      form.submit();
    }
  });
});
