// StarRoom Live Chat System


let messagesBox = document.getElementById("messages");




// Send Message

function sendMessage(){


let input = document.getElementById("messageInput");


let message = input.value.trim();



if(message==""){

return;

}



let user = auth.currentUser;



let username = "Guest";



if(user){

username = user.email;

}




database.ref("liveChat").push({


username:username,

message:message,

time:new Date().toLocaleTimeString()


});



input.value="";


}





// Load Messages Real Time

database.ref("liveChat").on("value",(snapshot)=>{


if(!messagesBox) return;


messagesBox.innerHTML="";



snapshot.forEach((child)=>{


let data = child.val();



messagesBox.innerHTML += `

<div class="message">


<b>
${data.username}
</b>


<p>
${data.message}
</p>


<small>
${data.time}
</small>


</div>

`;



});



// Auto Scroll

messagesBox.scrollTop = messagesBox.scrollHeight;



});
