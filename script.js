// Dark Mode Toggle
const toggleBtn = document.querySelector(".toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Maintain Theme on Reload
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Optional: Placeholder Message for Projects
const projectContainer = document.getElementById("project-container");
if (projectContainer && projectContainer.children.length === 0) {
  const message = document.createElement("p");
  message.textContent = "Your projects will appear here soon. Add them dynamically later!";
  message.style.textAlign = "center";
  message.style.color = "#777";
  projectContainer.appendChild(message);
}
