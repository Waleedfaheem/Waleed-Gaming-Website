let roomId = 1;

function createRoom(){

const name = document.getElementById("roomName").value;
const category = document.getElementById("roomCategory").value;
const seats = document.getElementById("roomSeats").value;

if(name===""){
alert("Please enter room name");
return;
}

const table = document.getElementById("roomList");

table.innerHTML += `
<tr>
<td>${roomId}</td>
<td>${name}</td>
<td>${category}</td>
<td>${seats}</td>
<td>🟢 Live</td>
<td>
<button onclick="lockRoom(this)">🔒 Lock</button>
<button onclick="deleteRoom(this)">🗑 Delete</button>
</td>
</tr>
`;

roomId++;

document.getElementById("roomName").value="";
}

function lockRoom(btn){
alert("Room Locked");
btn.innerHTML="🔓 Unlock";
btn.onclick=function(){
alert("Room Unlocked");
this.innerHTML="🔒 Lock";
this.onclick=function(){lockRoom(this);}
}
}

function deleteRoom(btn){
if(confirm("Delete this room?")){
btn.parentElement.parentElement.remove();
}
}
