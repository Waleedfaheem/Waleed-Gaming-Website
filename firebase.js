// ============================
// StarRoom Firebase Authentication
// ============================


// Google Provider

const googleProvider = new firebase.auth.GoogleAuthProvider();


// Facebook Provider

const facebookProvider = new firebase.auth.FacebookAuthProvider();


// ============================
// Google Login Function
// ============================

function googleSignIn(){

auth.signInWithPopup(googleProvider)

.then((result)=>{

const user = result.user;

console.log("Google Login:", user.email);


// Save User Data

database.ref("users/" + user.uid).set({

uid:user.uid,

name:user.displayName,

email:user.email,

photo:user.photoURL,

provider:"Google",

coins:0,

points:0

});


window.location.href="dashboard.html";


})

.catch((error)=>{


alert(error.message);


});


}


// ============================
// Facebook Login Function
// ============================

function facebookSignIn(){

auth.signInWithPopup(facebookProvider)

.then((result)=>{


const user=result.user;


console.log("Facebook Login:",user.email);



database.ref("users/" + user.uid).set({

uid:user.uid,

name:user.displayName,

email:user.email,

photo:user.photoURL,

provider:"Facebook",

coins:0,

points:0

});


window.location.href="dashboard.html";


})

.catch((error)=>{


alert(error.message);


});


}
// ============================
// Google Account Selection
// ============================

googleProvider.setCustomParameters({

prompt: "select_account"

});


// ============================
// Check User Login Session
// ============================

auth.onAuthStateChanged((user)=>{


if(user){


console.log("✅ Logged In User:", user.email);


// Update Online Status

database.ref("users/" + user.uid).update({

lastLogin:new Date().toISOString(),

online:true

});


}else{


console.log("No User Login");


}


});


// ============================
// Email Verification
// ============================

function sendVerification(){


const user = auth.currentUser;


if(user){


user.sendEmailVerification()

.then(()=>{


alert("Verification email sent");


})

.catch((error)=>{


alert(error.message);


});


}


}


// ============================
// Secure Logout
// ============================

function firebaseLogout(){


const user = auth.currentUser;


if(user){


database.ref("users/" + user.uid).update({

online:false

});


}


auth.signOut()

.then(()=>{


window.location.href="index.html";


})

.catch((error)=>{


alert(error.message);


});

 }
// ============================
// Load User Profile
// ============================

function loadProfile(uid){


database.ref("users/" + uid)

.once("value")

.then((snapshot)=>{


if(snapshot.exists()){


const userData = snapshot.val();


console.log("User Profile:",userData);


}


})

.catch((error)=>{


console.log(error.message);


});


}


// ============================
// Update User Data
// ============================

function updateUserData(uid,data){


database.ref("users/" + uid)

.update(data)

.then(()=>{


console.log("✅ User Data Updated");


})

.catch((error)=>{


console.log(error.message);


});


}


// ============================
// Authentication Error Handler
// ============================

function firebaseError(error){


switch(error.code){


case "auth/user-not-found":

alert("User not found");

break;


case "auth/wrong-password":

alert("Wrong password");

break;


case "auth/email-already-in-use":

alert("Email already registered");

break;


default:

alert(error.message);


}


}


// ============================
// Firebase Ready
// ============================

console.log("✅ StarRoom Firebase Authentication Ready");
