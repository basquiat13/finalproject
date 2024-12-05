:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --dark-bg: #333;
  --light-bg: #fff;
  --font-family: 'Arial', sans-serif;
}

body {
  font-family: var(--font-family);
  background-color: var(--light-bg);
  color: var(--dark-bg);
  margin: 0;
  padding: 0;
}

header {
  background-color: var(--primary-color);
  color: white;
  padding: 1rem;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

nav a {
  color: white;
  text-decoration: none;
}

button {
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: var(--secondary-color);
}

section {
  padding: 20px;
  margin: 20px;
}

/* CSS Grid for Projects */
.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.project-card {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.skills-visualization .skill {
  background-color: var(--primary-color);
  padding: 10px;
  margin: 10px;
  width: 100px;
  text-align: center;
  color: white;
  border-radius: 5px;
  transition: width 1s;
}

.skills-visualization .skill[data-skill="80"] {
  width: 80%;
}

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

/* Responsive Design */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }
}
