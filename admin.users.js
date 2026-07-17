// StarRoom Admin User Management



let allUsers = [];



// Load Users

database.ref("users")

.on("value",(snapshot)=>{


allUsers=[];


snapshot.forEach((child)=>{


let data = child.val();



allUsers.push({

id:child.key,

username:data.username || data.fullName || "User",

coins:data.coins || 0,

yellowPoints:data.yellowPoints || 0,

vip:data.vipLevel || "VIP 0",

status:data.status || "Active"


});


});



displayUsers(allUsers);



});







// Display Users


function displayUsers(users){



let box=document.getElementById("userList");


if(!box)return;



box.innerHTML="";



users.forEach((user)=>{


box.innerHTML += `


<div class="user-card">


<h3>
👤 ${user.username}
</h3>


<p>
🪙 Coins: ${user.coins}
</p>


<p>
🟡 Yellow Points: ${user.yellowPoints}
</p>


<p>
👑 ${user.vip}
</p>


<p>
Status: ${user.status}
</p>



<div class="user-actions">


<button onclick="addCoins('${user.id}')">

+ Coins

</button>



<button onclick="blockUser('${user.id}')">

Block

</button>



</div>


</div>


`;



});



}







// Search User


function searchUser(){


let value=document.getElementById("searchUser").value.toLowerCase();



let filtered=allUsers.filter((user)=>{


return user.username.toLowerCase().includes(value);


});



displayUsers(filtered);


}







// Add Coins


function addCoins(uid){


let amount = prompt("Enter Coins Amount");


if(!amount)return;



database.ref("users/"+uid).once("value")

.then((snap)=>{


let coins=snap.val().coins || 0;



database.ref("users/"+uid).update({

coins: coins + Number(amount)

});



alert("Coins Added");


});


}







// Block User


function blockUser(uid){


database.ref("users/"+uid).update({

status:"Blocked"

});


alert("User Blocked");


}
