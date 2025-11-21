document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent actual form submit

    let hasError = false;

    // Input values
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    // Clear previous errors
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.getElementById("successMessage").textContent = "";

    // Name validation
    if (name.value.trim() === "") {
        name.nextElementSibling.textContent = "Name is required";
        hasError = true;
    }

    // Email validation using regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        email.nextElementSibling.textContent = "Email is required";
        hasError = true;
    } else if (!emailPattern.test(email.value)) {
        email.nextElementSibling.textContent = "Enter a valid email";
        hasError = true;
    }

    // Message validation
    if (message.value.trim() === "") {
        message.nextElementSibling.textContent = "Message is required";
        hasError = true;
    }

    // If no errors → success message
    if (!hasError) {
        document.getElementById("successMessage").textContent =
            "Form submitted successfully!";
    }
});
