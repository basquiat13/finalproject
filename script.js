

const toggleButton = document.getElementById("toggle-theme");

// Listen for a click on the button
toggleButton.addEventListener("click", function() {
    // Toggle the "dark-mode" class on the body element
    document.body.classList.toggle("dark-mode");
});
body.dark-mode {
  background-color: var(--dark-bg);
  color: var(--light-bg);
}


}
