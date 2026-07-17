function guestRegister(){

let fullname = document.getElementById("fullname").value;
let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let age = document.getElementById("age").value;

if(fullname=="" || username=="" || email=="" || password=="" || age==""){
alert("Please fill all fields");
return;
}

localStorage.setItem("fullname",fullname);
localStorage.setItem("username",username);
localStorage.setItem("email",email);
localStorage.setItem("age",age);

alert("Guest Account Created Successfully");

window.location.href="home.html";

}
// Splash Screen

window.onload = function () {

const splash = document.createElement("div");

splash.id = "splash";

splash.innerHTML = `
<div class="logo">⭐ Pongino</div>
<div class="loader"></div>
`;

document.body.appendChild(splash);

// 1 Second Loading

setTimeout(() => {
splash.style.opacity = "0";

setTimeout(() => {
splash.remove();
},500);

},1000);

};
