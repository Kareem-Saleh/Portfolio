let darkMode = localStorage.getItem("darkMode");

const themeButton = document.querySelector(".theme-button");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  sun.classList.toggle("none");
  moon.classList.toggle("none");

  localStorage.setItem("darkMode", "active");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  sun.classList.toggle("none");
  moon.classList.toggle("none");

  localStorage.setItem("darkMode", null);
}

if (darkMode === "active") {
  enableDarkMode();
}

themeButton.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode === "active" ? disableDarkMode() : enableDarkMode();
});
