 // ======================================
// StarRoom Firebase
// Part 1
// ======================================

// Firebase Configuration

const firebaseConfig = {
  apiKey: "AIzaSyB4tAhBFSuBpDXZ5UVlL2r3tCRIXdy88hA",
  authDomain: "starroom-9269a.firebaseapp.com",
  projectId: "starroom-9269a",
  storageBucket: "starroom-9269a.firebasestorage.app",
  messagingSenderId: "84736834439",
  appId: "1:84736834439:web:41bf36daf32aa5f3607122"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// Firebase Services

const auth = firebase.auth();
const database = firebase.database();

// Language

auth.languageCode = "en";

console.log("✅ Firebase Connected Successfully");
// ======================================
// StarRoom Firebase
// Part 2
// ======================================

// Google Login

const googleProvider = new firebase.auth.GoogleAuthProvider();

function googleSignIn() {

auth.signInWithPopup(googleProvider)

.then((result) => {

window.location.href = "dashboard.html";

})

.catch((error) => {

alert(error.message);

});

}

// Facebook Login

const facebookProvider = new firebase.auth.FacebookAuthProvider();

function facebookSignIn() {

auth.signInWithPopup(facebookProvider)

.then((result) => {

window.location.href = "dashboard.html";

})

.catch((error) => {

alert(error.message);

});

}

// Check User Login

auth.onAuthStateChanged((user) => {

if (user) {

console.log("User Logged In:", user.email);

} else {
  // ======================================
// StarRoom Firebase
// Part 3
// ======================================

// Logout

function logout() {

auth.signOut()

.then(() => {

window.location.href = "index.html";

})

.catch((error) => {

alert(error.message);

});

}

// Save User Data

function saveUserData(uid, data) {

database.ref("users/" + uid).
