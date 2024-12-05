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
    });
});


