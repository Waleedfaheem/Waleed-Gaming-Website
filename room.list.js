// StarRoom Room List


// Load Rooms

database.ref("rooms").on("value",(snapshot)=>{


let roomList = document.getElementById("roomList");


if(!roomList) return;


roomList.innerHTML="";


snapshot.forEach((child)=>{


let room = child.val();


roomList.innerHTML += `

<div class="room-card">

<h2>🎤 ${room.name || "Star Room"}</h2>

<p>📂 Category: ${room.category || "Fun"}</p>

<p>🪑 Seats: ${room.seats || "8 Seats"}</p>

<p>🟢 Status: Live</p>


<button onclick="joinRoom('${child.key}')">

Join Room

</button>


</div>

`;

});


});




// Join Room

function joinRoom(id){


localStorage.setItem("roomID",id);


window.location.href="voice_room.html";


}
