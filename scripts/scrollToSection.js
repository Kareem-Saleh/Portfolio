document.querySelectorAll(".jump-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    const rightSide = document.querySelector(".content-right");

    rightSide.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});
