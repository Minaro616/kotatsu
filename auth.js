// TOGGLE UI
function showLogin() {
  document.getElementById("loginForm").classList.add("active");
  document.getElementById("registerForm").classList.remove("active");

  document.getElementById("loginTab").classList.add("active");
  document.getElementById("registerTab").classList.remove("active");
}

function showRegister() {
  document.getElementById("registerForm").classList.add("active");
  document.getElementById("loginForm").classList.remove("active");

  document.getElementById("registerTab").classList.add("active");
  document.getElementById("loginTab").classList.remove("active");
}

// REGISTER
function register() {
  const user = document.getElementById("regUser").value;
  const pass = document.getElementById("regPass").value;
  const msg = document.getElementById("regMsg");

  if (!user || !pass) {
    msg.innerText = "Isi semua field!";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(u => u.user === user)) {
    msg.innerText = "Username sudah digunakan!";
    return;
  }

  users.push({ user, pass });
  localStorage.setItem("users", JSON.stringify(users));

  msg.innerText = "Akun berhasil dibuat!";
  setTimeout(showLogin, 800);
}

// LOGIN
function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  const msg = document.getElementById("loginMsg");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const valid = users.find(u => u.user === user && u.pass === pass);

  if (valid) {
    localStorage.setItem("login", "true");
    localStorage.setItem("currentUser", user);
    window.location.href = "dashboard.html";
  } else {
    msg.innerText = "Login gagal!";
  }
}

function logout() {
  localStorage.removeItem("login");
  localStorage.removeItem("currentUser");
  window.location.href = "auth.html";
}

// TOGGLE UI
function showLogin() {
  document.getElementById("loginForm").classList.add("active");
  document.getElementById("registerForm").classList.remove("active");

  document.getElementById("loginTab").classList.add("active");
  document.getElementById("registerTab").classList.remove("active");
}

function showRegister() {
  document.getElementById("registerForm").classList.add("active");
  document.getElementById("loginForm").classList.remove("active");

  document.getElementById("registerTab").classList.add("active");
  document.getElementById("loginTab").classList.remove("active");
}

// REGISTER
function register() {
  const user = document.getElementById("regUser").value;
  const pass = document.getElementById("regPass").value;
  const msg = document.getElementById("regMsg");

  if (!user || !pass) {
    msg.innerText = "Isi semua field!";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(u => u.user === user)) {
    msg.innerText = "Username sudah digunakan!";
    return;
  }

  users.push({ user, pass });
  localStorage.setItem("users", JSON.stringify(users));

  msg.innerText = "Akun berhasil dibuat!";
  setTimeout(showLogin, 800);
}

// LOGIN
function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  const msg = document.getElementById("loginMsg");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const valid = users.find(u => u.user === user && u.pass === pass);

  if (valid) {
    localStorage.setItem("login", "true");
    localStorage.setItem("currentUser", user);
    window.location.href = "dashboard.html";
  } else {
    msg.innerText = "Login gagal!";
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("login");
  localStorage.removeItem("currentUser");
  window.location.href = "auth.html";
}