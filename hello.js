// Function to display a welcome message
function displayWelcomeMessage() {
    alert("Welcome to Rajveer's Favorite Novels Page!");
}

// Function to validate the form
function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const message = document.forms["contactForm"]["message"].value;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}

// Event listener for form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way
        if (validateForm()) {
            form.submit(); // Submit the form if validation passes
        }
    });
});
