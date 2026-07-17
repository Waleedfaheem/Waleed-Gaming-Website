// StarRoom Voice Rooms System


function joinRoom(roomId){

localStorage.setItem("currentRoom", roomId);

alert("🎤 Joining Room...");

window.location.href="room.html";

}



// Load Rooms From Firebase

database.ref("rooms").on("value",(snapshot)=>{


let roomList = document.getElementById("roomList");


if(!roomList){
return;
}


roomList.innerHTML="";


snapshot.forEach((child)=>{


let room = child.val();


roomList.innerHTML += `

<div class="room-card">

<h3>🎤 ${room.name}</h3>

<p>Host: ${room.host}</p>

<p>👥 Online: ${room.users || 0}</p>


<button onclick="joinRoom('${child.key}')">

Join Room

</button>


</div>

`;

});


});
