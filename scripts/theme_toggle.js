let darkMode = localStorage.getItem("darkMode");
const themeButton = document.querySelector(".theme-button");

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "active");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", null);
}

if (darkMode === "active") {
  enableDarkMode();
}

themeButton.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode === "active" ? disableDarkMode() : enableDarkMode();
});
