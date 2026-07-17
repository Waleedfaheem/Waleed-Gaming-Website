// StarRoom Admin User Manager


let allUsers = [];


// Load Users

database.ref("users").on("value",(snapshot)=>{


allUsers = [];


snapshot.forEach((child)=>{

let user = child.val();

user.id = child.key;

allUsers.push(user);


});


displayUsers(allUsers);


});



// Display Users

function displayUsers(users){


let list = document.getElementById("userList");


if(!list) return;


list.innerHTML="";



users.forEach((user)=>{


list.innerHTML += `

<div class="user-card">

<h3>👤 ${user.username || user.fullName || "User"}</h3>

<p>📧 ${user.email || "No Email"}</p>

<p>🪙 Coins: ${user.coins || 0}</p>

<p>🏆 VIP: ${user.vip || "VIP 0"}</p>


<button onclick="blockUser('${user.id}')">

Block

</button>


</div>

`;

});


}




// Search User

function searchUsers(){


let value = document.getElementById("searchUser").value.toLowerCase();


let result = allUsers.filter((user)=>{


return (

(user.username || "").toLowerCase().includes(value)

||

(user.email || "").toLowerCase().includes(value)

);


});


displayUsers(result);


}




// Block User

function blockUser(id){


database.ref("users/"+id).update({

blocked:true

});


alert("User Blocked");


}
