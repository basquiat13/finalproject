// Toggle Dark/Light Mode functionality
const toggleButton = document.getElementById("toggle-theme");

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Project Search Functionality
const searchInput = document.getElementById("project-search");
const projectCards = document.querySelectorAll(".project-card");

searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();

    projectCards.forEach(function (card) {
        const title = card.getAttribute("data-title").toLowerCase();
        const description = card.getAttribute("data-description").toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
        document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("contact-form");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    // Email regex pattern
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    form.addEventListener("submit", function (event) {
        // Clear previous error messages
        nameError.style.display = "none";
        emailError.style.display = "none";
        messageError.style.display = "none";

        let valid = true;

        // Validate Name
        if (nameField.value.trim() === "") {
            nameError.textContent = "Name is required.";
            nameError.style.display = "block";
            valid = false;
        }

        // Validate Email
        if (!emailRegex.test(emailField.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            emailError.style.display = "block";
            valid = false;
        }

        // Validate Message
        if (messageField.value.trim() === "") {
            messageError.textContent = "Message cannot be empty.";
            messageError.style.display = "block";
            valid = false;
        }

        // Prevent form submission if invalid
        if (!valid) {
            event.preventDefault();
        }
    });
});


