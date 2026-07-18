// ==========================
// StarRoom Register System
// ==========================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", registerUser);

function registerUser(e){

e.preventDefault();

const fullname = document.getElementById("fullname").value.trim();

const email = document.getElementById("email").value.trim();

const password = document.getElementById("password").value;

const confirmPassword = document.getElementById("confirmPassword").value;

const terms = document.getElementById("terms").checked;

if(fullname==""){

alert("Please Enter Full Name");

return;

}

if(email==""){

alert("Please Enter Email");

return;

}

if(password.length<6){

alert("Password Must Be At Least 6 Characters");

return;

}

if(password!==confirmPassword){

alert("Passwords Do Not Match");

return;

}

if(!terms){

alert("Please Accept Terms & Conditions");

return;

}

// Continue in Part 2
// ==========================
// Firebase Registration
// ==========================

auth.createUserWithEmailAndPassword(email, password)

.then((userCredential)=>{

const user = userCredential.user;

// Save User Data

database.ref("users/"+user.uid).set({

fullname: fullname,

email: email,

coins: 10000,

balance: 0,

vip: 0,

createdAt: Date.now()

});

// Email Verification

user.sendEmailVerification()

.then(()=>{

alert("✅ Account Created Successfully!\n\nPlease verify your Email before Login.");

window.location.href="index.html";

})

.catch((error)=>{

alert(error.message);

});

})

.catch((error)=>{

alert(error.message);

});
}// ==========================
// Google Register
// ==========================

const googleRegister = document.getElementById("googleRegister");

if(googleRegister){

googleRegister.addEventListener("click",()=>{

alert("Google Sign In will be connected after Firebase configuration.");

});

}

// ==========================
// Facebook Register
// ==========================

const facebookRegister = document.getElementById("facebookRegister");

if(facebookRegister){

facebookRegister.addEventListener("click",()=>{

alert("Facebook Sign In will be connected after Firebase configuration.");

});

}

// ==========================
// Dashboard Redirect
// ==========================

function goToDashboard(){

window.location.href="dashboard.html";

}

// ==========================
//
