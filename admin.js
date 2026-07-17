function adminLogin(){

let id=document.getElementById("adminid").value;
let pass=document.getElementById("adminpass").value;

if(id==="admin" && pass==="123456"){
alert("Welcome Super Admin");
window.location.href="dashboard.html";
}else{
alert("Invalid Admin ID or Password");
}

}
