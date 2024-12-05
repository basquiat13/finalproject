document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentMode);
});

// Load the saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}

// Portfolio Search Filter
document.getElementById("project-search").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    document.querySelectorAll(".project-card").forEach((card) => {
        const title = card.getAttribute("data-title").toLowerCase();
        if (title.includes(query)) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
});

// Modal Popup for Portfolio
document.querySelectorAll(".project-thumbnail").forEach((thumbnail) => {
    thumbnail.addEventListener("click", (event) => {
        const modal = document.getElementById("portfolio-modal");
        const img = event.target;
        const description = img.closest(".project-card").getAttribute("data-description");

        // Set modal content
        document.getElementById("modal-img").src = img.src;
        document.getElementById("modal-description").innerText = description;

        // Display modal
        modal.style.display = "block";
    });
});

// Close Modal
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("portfolio-modal").style.display = "none";
});

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    // Get form elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Validate Name
    if (!name.value.trim()) {
        document.getElementById("name-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("name-error").style.display = "none";
    }

    // Validate Email
    if (!email.value.trim() || !email.validity.valid) {
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("email-error").style.display = "none";
    }

    // Validate Message
    if (!message.value.trim()) {
        document.getElementById("message-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("message-error").style.display = "none";
    }

    // If form is valid, show success message
    if (isValid) {
        alert("Message Sent!");
    }
});
