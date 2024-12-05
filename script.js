// Dark Mode Toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

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
        document.getElementById("modal-img").src = img.src;
        document.getElementById("modal-description").innerText = img.closest(".project-card").getAttribute("data-description");
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

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value.trim()) {
        document.getElementById("name-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("name-error").style.display = "none";
    }

    if (!email.value.trim() || !email.validity.valid) {
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("email-error").style.display = "none";
    }

    if (!message.value.trim()) {
        document.getElementById("message-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("message-error").style.display = "none";
    }

    if (isValid) {
        alert("Message Sent!");
    }
});
