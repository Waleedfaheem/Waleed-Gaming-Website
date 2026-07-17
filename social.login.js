// StarRoom Social Login System


// Google Login

function googleLogin(){

let provider = new firebase.auth.GoogleAuthProvider();


auth.signInWithPopup(provider)

.then((result)=>{


let user = result.user;


saveUserData(user.uid,{

fullName:user.displayName,

email:user.email,

photo:user.photoURL,

coins:800,

level:1,

vip:"VIP 0",

verified:false

});


alert("⭐ Google Login Successful");


window.location.href="home.html";


})

.catch((error)=>{

alert(error.message);

});

}



// Facebook Login

function facebookLogin(){

let provider = new firebase.auth.FacebookAuthProvider();


auth.signInWithPopup(provider)

.then((result)=>{


let user = result.user;


saveUserData(user.uid,{

fullName:user.displayName,

email:user.email,

photo:user.photoURL,

coins:800,

level:1,

vip:"VIP 0",

verified:false

});


alert("📘 Facebook Login Successful");


window.location.href="home.html";


})

.catch((error)=>{

alert(error.message);

});

}
