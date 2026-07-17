function loginUser() {

let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value;

if(email === "" || password === ""){
alert("Please enter Email and Password");
return;
}

auth.signInWithEmailAndPassword(email,password)

.then((userCredential)=>{

alert("⭐ Welcome to StarRoom");

window.location.href="home.html";

})

.catch((error)=>{

alert(error.message);

});

}



// Guest Login

function guestLogin(){

let guestName = prompt("Enter Your Name");

if(!guestName){
return;
}

localStorage.setItem("guestUser",guestName);

window.location.href="home.html";

}



// Google Login

function googleLogin(){

let provider = new firebase.auth.GoogleAuthProvider();

auth.signInWithPopup(provider)

.then((result)=>{

let user = result.user;

database.ref("users/"+user.uid).update({

username:user.displayName,
email:user.email,
photo:user.photoURL,
coins:800,
yellowPoints:0,
vip:"VIP 0"

});

window.location.href="home.html";

})

.catch((error)=>{

alert(error.message);

});

}
