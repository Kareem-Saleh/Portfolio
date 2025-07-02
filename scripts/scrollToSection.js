const rightSide = document.querySelector(".content-right");
const computedStyle = window.getComputedStyle(rightSide);
const paddingTop = computedStyle.getPropertyValue("padding-top").slice(0, -2);

document.querySelectorAll(".jump-link").forEach((link) => {
  if (link.getAttribute("href") == "../index.html") {
    return;
  }
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    rightSide.scrollTo({
      top: targetSection.offsetTop - paddingTop,
      behavior: "smooth",
    });
  });
});
