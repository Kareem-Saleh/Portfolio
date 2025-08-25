let darkMode = localStorage.getItem("darkMode");

const themeButton = document.querySelector(".theme-button");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const favicon = document.querySelector("link[rel~='icon']");

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  sun.classList.toggle("none");
  moon.classList.toggle("none");
  favicon.href = "./imgs/favicons/dark/favicon.ico";

  localStorage.setItem("darkMode", "active");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  sun.classList.toggle("none");
  moon.classList.toggle("none");
  favicon.href = "./imgs/favicons/light/favicon.ico";

  localStorage.setItem("darkMode", null);
}

if (darkMode === "active") {
  enableDarkMode();
}

themeButton.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode === "active" ? disableDarkMode() : enableDarkMode();
});
