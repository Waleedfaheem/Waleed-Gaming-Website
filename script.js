function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter Email & Password");
        return;
    }

    alert("Login Successful!");

    window.location.href = "dashboard.html";

}

function googleSignIn() {
    alert("Google Login Coming Soon");
}

function facebookSignIn() {
    alert("Facebook Login Coming Soon");
}
function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" || password == "") {
        alert("ای میل اور پاسورڈ لکھیں");
        return;
    }

    window.location.href = "dashboard.html";
}
