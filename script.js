// ======================================
// StarRoom
// script.js
// Part 1
// ======================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

loginForm.addEventListener("submit", function(e) {

e.preventDefault();

const email = document.getElementById("email").value.trim();

const password = document.getElementById("password").value;

auth.signInWithEmailAndPassword(email, password)

.then((userCredential) => {

window.location.href = "dashboard.html";

})

.catch((error) => {

alert(error.message);

});

});

}

// Google Login Button

const googleBtn = document.getElementById("googleLogin");

if (googleBtn) {

googleBtn.addEventListener("click", googleSignIn);

}

// Facebook Login Button

const facebookBtn = document.getElementById("facebookLogin");

if (facebookBtn) {

facebookBtn.addEventListener("click", facebookSignIn);

}
// ======================================
// StarRoom
// script.js
// Part 2
// ======================================

// Register Form

const registerForm = document.getElementById("registerForm");

if (registerForm) {

registerForm.addEventListener("submit", function(e) {

e.preventDefault();

const name = document.getElementById("name").value.trim();

const email = document.getElementById("email").value.trim();

const password = document.getElementById("password").value;

auth.createUserWithEmailAndPassword(email, password)

.then((userCredential) => {

const user = userCredential.user;

saveUserData(user.uid, {

name: name,

email: email,

coins: 800,

balance: 0,

vip: 0

});

user.sendEmailVerification();

alert("Account Created Successfully. Please verify your Email.");

window.location.href = "index.html";

})

.catch((error) => {

alert(error.message);

});

});
// ======================================
// StarRoom
// script.js
// Part 3
// ======================================

// Check User Session

auth.onAuthStateChanged((user) => {

if (user) {

if (window.location.pathname.includes("index.html") ||
window.location.pathname.endsWith("/")) {

window.location.href = "dashboard.html";

}

}

});

// Logout Button

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

logoutBtn.addEventListener("click", function () {

logout();

});

}

// Welcome Message

auth.onAuthStateChanged((user) => {

if (user) {

const welcome = document.getElementById("welcomeUser");

if (welcome) {

welcome.innerHTML = "Welcome, " + user.email;

}

}

});

console.log("✅ script.js Loaded Successfully");
    }
