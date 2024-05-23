const root = document.documentElement;
const themeButton = document.querySelector(".theme-button");

let theme = "light";

themeButton.addEventListener("click", () => {
    if (theme === "light") {
        root.style.setProperty("--body-color", "rgb(0,0,0)");
        root.style.setProperty("--accent-black", "rgb(236, 209, 209)");
        root.style.setProperty("--accent-yellow", "rgb(52, 48, 48)");
        root.style.setProperty("--accent-white", "rgb(25, 25, 25)");
        root.style.setProperty("--text-white", "rgb(2, 2, 2)");
        root.style.setProperty("--text-black", "rgb(255, 255, 255)");
        theme = "dark";
    } else {
        root.style.setProperty("--accent-black", "rgb(23, 23, 23)");
        root.style.setProperty("--accent-yellow", "rgb(235, 235, 42)");
        root.style.setProperty("--accent-white", "rgb(255,255,255)");
        root.style.setProperty("--text-white", "rgb(255,255,255)");
        root.style.setProperty("--text-black", "rgb(0,0,0)");
        root.style.setProperty("--body-color", "rgb(255,255,255)");
        theme = "light"
    };
});
