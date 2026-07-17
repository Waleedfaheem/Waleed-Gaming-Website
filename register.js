function createAccount(){

let name = document.getElementById("fullName").value;
let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let age = document.getElementById("age").value;


if(name=="" || username=="" || email=="" || password=="" || age==""){

alert("Please fill all fields");
return;

}


// Create Firebase Account

auth.createUserWithEmailAndPassword(email,password)

.then((userCredential)=>{


let uid = userCredential.user.uid;


// Save User Data

saveUserData(uid,{

name:name,
username:username,
email:email,
age:age,
coins:800,
level:1,
vip:"VIP 0",
verified:false

});


alert("Account Created Successfully");


window.location.href="home.html";


})


.catch((error)=>{

alert(error.message);

});


}
