document.querySelector(".shop-now-btn").addEventListener("click", function () {
  window.location.href = "#products";
});
document.querySelector(".hero-image").addEventListener("click", function () {
  window.location.href = "#products";
});

const menuButton = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".nav-ul");

menuButton.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

document.addEventListener("click", (event) => {
  if (
    !event.target.matches(".menu-icon") &&
    !event.target.matches(".nav-item") &&
    !event.target.matches(".close-icon")
  ) {
    sidebar.classList.remove("show-sidebar");
  }
});
