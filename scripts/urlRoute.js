const routes = {
  404: {
    template: "/templates/404.html",
    title: "",
    description: "",
  },
  "/": {
    template: "/templates/index.html",
    title: "",
    description: "",
  },
  "/index": {
    template: "/templates/index.html",
    title: "",
    description: "",
  },
  "/boards": {
    template: "/templates/boards.html",
    title: "",
    description: "",
  },
};

const wrapper = document.querySelector(".wrapper");

document.addEventListener("click", (event) => {
  const clickableArea = event.target.closest(".project-info") || false;

  if (!clickableArea) {
    return;
  }

  const href = event.target.closest(".blog-href").href;

  event.preventDefault();
  route(event, href);
});

const route = (event, href) => {
  console.log(href);
  event.preventDefault();
  window.history.pushState({}, "", href);
  locationHandler();
};

const locationHandler = async () => {
  let location = window.location.pathname;
  console.log(location);

  if (location.length === 0) {
    location = "/";
  }

  const route = routes[location] || routes[404];
  console.log(route);

  const html = await fetch(route.template).then((response) => response.text());
  console.log(html);

  wrapper.innerHTML = html;
};

// document.addEventListener("DOMContentLoaded", () => {
//   window.onpopstate = locationHandler;
//   window.route = route;
//   locationHandler();
// });
