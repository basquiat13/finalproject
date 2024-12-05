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
        document.addEventListener("DOMContentLoaded", function () {
    // Select all links in the navigation menu
    const links = document.querySelectorAll('nav a');

    // Loop through each link
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default link click behavior

            // Get the target section from the href attribute of the clicked link
            const targetId = link.getAttribute("href").slice(1);  // Remove the "#" from href
            const targetSection = document.getElementById(targetId);

            // Smoothly scroll to the target section
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"  // Align the section to the top of the page
            });
            document.addEventListener('DOMContentLoaded', function () {
    // Get all project thumbnail images and modal elements
    const projectThumbnails = document.querySelectorAll('.project-thumbnail');
    const modal = document.getElementById('portfolio-modal');
    const modalImg = document.getElementById('modal-img');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.getElementById('close-modal');

    // Add event listener to each thumbnail to open the modal with corresponding content
    projectThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            // Get the full-size image and description (replace with your real content)
            const fullSizeImage = thumbnail.src.replace('thumbnail', 'fullsize'); // Change this logic as per your setup
            const description = thumbnail.nextElementSibling.innerText;  // Get the description from the next sibling paragraph

            // Set the content of the modal
            modalImg.src = fullSizeImage;
            modalDescription.textContent = description;

            // Display the modal
            modal.style.display = 'block';
        });
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close the modal if the user clicks anywhere outside the modal content
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
        });
    });
});


