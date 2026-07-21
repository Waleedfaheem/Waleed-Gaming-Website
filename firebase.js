// ============================
// StarRoom Firebase Config
// ============================

// Replace these values with your Firebase Project

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",

projectId: "YOUR_PROJECT",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "YOUR_SENDER_ID",

appId: "YOUR_APP_ID"

};

// ============================
// Initialize Firebase
// ============================

firebase.initializeApp(firebaseConfig);

// ============================
// Firebase Services
// ============================

const auth = firebase.auth();

const database = firebase.database();

// ============================
// Authentication Settings
// ============================

auth.languageCode = "en";
// ============================
// Google Authentication
// ============================

const googleProvider = new firebase.auth.GoogleAuthProvider();

function googleSignIn(){

auth.signInWithPopup(googleProvider)

.then((result)=>{

window.location.href="dashboard.html";

})

.catch((error)=>{

alert(error.message);

});

}

// ============================
// Facebook Authentication
// ============================

const facebookProvider = new firebase.auth.FacebookAuthProvider();

function facebookSignIn(){

auth.signInWithPopup(facebookProvider)

.then((result)=>{

window.location.href="dashboard.html";

})

.catch((error)=>{

alert(error.message);

});

}

// ============================
// Check User Session
// ============================

auth.onAuthStateChanged((user)=>{

if(user){

console.log("User Logged In :",user.email);

}else{

console.log("No User Logged In");

}

});

// ============================
// Logout
// ============================

function logout(){

auth.signOut()

.then(()=>{

window.location.href="index.html";

})

.catch((error)=>{

alert(error.message);

});
// ============================
// Email Verification Check
// ============================

function checkEmailVerification(){

const user = auth.currentUser;

if(user){

user.reload().then(()=>{

if(user.emailVerified){

console.log("✅ Email Verified");

}else{

alert("Please verify your email before logging in.");

}

});

}

}

// ============================
// Load User Data
// ============================

function loadUserData(uid){

database.ref("users/" + uid).once("value")

.then((snapshot)=>{

if(snapshot.exists()){

console.log(snapshot.val());

}

});

}

// ============================
// Save User Data
// ============================

function saveUserData(uid,data){

database.ref("users/" + uid).update(data);

}

// ============================
// StarRoom Firebase Ready
// ============================

console.log("✅ Firebase Connected Successfully");
  }
const firebaseConfig = {
  apiKey: "AIzaSyB4tAhBFSuBpDXZ5UVlL2r3tCRIXdy88hA",
  authDomain: "starroom-9269a.firebaseapp.com",
  projectId: "starroom-9269a",
  storageBucket: "starroom-9269a.firebasestorage.app",
  messagingSenderId: "84736834439",
  appId: "1:84736834439:web:41bf36daf32aa5f3607122"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
