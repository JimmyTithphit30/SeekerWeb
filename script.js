// Placeholder for interactivity
console.log("Welcome to Seeker Web!");
function toggleMenu() {
  const nav = document.getElementById('nav-links');
  nav.classList.toggle('active');
}
function toggleMode() {
  isLoginMode = !isLoginMode;
  authTitle.textContent = isLoginMode ? "Log In" : "Sign Up";
  toggleBtn.textContent = isLoginMode ? "Sign up" : "Log in";
  document.getElementById("nameField").style.display = isLoginMode ? "none" : "block";
  authFormElement.querySelector("button").textContent = isLoginMode ? "Log In" : "Sign Up";
}
if (!email || !pass || (!isLoginMode && !name)) {
  alert("Please fill out all fields.");
  return;
}



