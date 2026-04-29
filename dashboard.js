// CHECK LOGIN
if (localStorage.getItem("login") !== "true") {
  window.location.href = "auth.html";
}

// USER
document.getElementById("user").innerText =
  localStorage.getItem("currentUser") || "User";

// SIDEBAR TOGGLE
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

// LOGOUT
function logout() {
  localStorage.removeItem("login");
  localStorage.removeItem("currentUser");
  window.location.href = "auth.html";
}

// ANIMASI
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
}

if (localStorage.getItem("login") !== "true") {
  window.location.href = "auth.html";
}