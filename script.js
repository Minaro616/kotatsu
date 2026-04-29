const items = document.querySelectorAll(".feature-list .item");
const preview = document.getElementById("preview-img");

let isAnimating = false;

items.forEach(item => {
  item.addEventListener("click", () => {

    if (isAnimating) return; // cegah spam klik
    isAnimating = true;

    // reset active
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // fade out
    preview.style.opacity = "0";

    setTimeout(() => {
      preview.src = item.getAttribute("data-img");

      // fade in
      preview.style.opacity = "1";
      isAnimating = false;
    }, 200);

  });
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

function goDashboard() {
  if (localStorage.getItem("login") === "true") {
    window.location.href = "dashboard.html";
  } else {
    window.location.href = "login.html";
  }
}

function logout() {
  localStorage.removeItem("login");
  window.location.href = "login.html";
}