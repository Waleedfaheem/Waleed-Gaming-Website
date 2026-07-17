// StarRoom Admin Authentication System


function checkAdmin(){


let user = firebase.auth().currentUser;



if(!user){

window.location.href = "login.html";

return;

}



database.ref("admins/" + user.uid)

.once("value")

.then((snapshot)=>{


if(snapshot.exists()){


console.log("Admin Verified");


}else{


alert("Access Denied");

window.location.href="index.html";


}



});



}



// Run Check

checkAdmin();
