// StarRoom Live Room Advanced System


let joinedSeat = null;
let micOn = false;


// Load User Data

auth.onAuthStateChanged((user)=>{


if(user){


database.ref("users/"+user.uid).once("value")

.then((snapshot)=>{


let data = snapshot.val();



if(data){


if(document.getElementById("points")){

document.getElementById("points").innerHTML =
data.yellowPoints || 0;

}



}


});


}


});




// Join Seat

function joinSeat(){


let user = auth.currentUser;


if(!user){

alert("Please Login");

return;

}




if(joinedSeat){

alert("Already Joined");

return;

}





for(let i=1;i<=8;i++){


let seat = document.getElementById("seat"+i);



if(seat.innerText.includes("➕")){


joinedSeat = i;



seat.innerHTML = `

<div class="avatar">
👤
</div>

<p>
${user.displayName || "User"}
</p>

`;



database.ref("liveSeats/seat"+i).set({


userId:user.uid,

name:user.displayName || "User",

status:"Joined"


});



break;


}


}


}





// Mic System

function toggleMic(){


micOn = !micOn;



if(micOn){

alert("🎙 Mic ON");

}

else{

alert("🔇 Mic OFF");

}



}




// Leave Room

function leaveRoom(){


let user = auth.currentUser;


if(joinedSeat){



document.getElementById("seat"+joinedSeat).innerHTML = `

➕

<p>
Seat ${joinedSeat}
</p>

`;



database.ref("liveSeats/seat"+joinedSeat).remove();



joinedSeat=null;


}



alert("🚪 Left Live Room");


}
