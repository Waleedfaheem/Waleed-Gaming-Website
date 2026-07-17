// StarRoom Admin Coin Purchase Approval System


let coinRequests = document.getElementById("coinRequests");



// Load Coin Requests

database.ref("coinRequests")

.on("value",(snapshot)=>{


if(!coinRequests)return;


coinRequests.innerHTML="";



snapshot.forEach((child)=>{


let data = child.val();

let id = child.key;



coinRequests.innerHTML += `


<div class="coin-request-card">


<h3>
👤 ${data.username || "User"}
</h3>



<p>
💰 Amount Paid: ${data.amount || 0} PKR
</p>



<p>
🪙 Requested Coins: ${data.coins || 0}
</p>



<p>
📱 Method: ${data.method || "Easypaisa"}
</p>



<p>
📞 Number: ${data.number || ""}
</p>



<p>
Status: ${data.status || "Pending"}
</p>



<div class="coin-actions">


<button class="approve-coin" onclick="approveCoins('${id}')">

Approve

</button>



<button class="reject-coin" onclick="rejectCoins('${id}')">

Reject

</button>



</div>



</div>


`;



});


});








// Approve Coin Request


function approveCoins(id){


database.ref("coinRequests/"+id)

.once("value")

.then((snapshot)=>{


let request = snapshot.val();



if(!request)return;



database.ref("users/"+request.userId)

.once("value")

.then((userSnap)=>{


let user = userSnap.val();



let oldCoins = user.coins || 0;



database.ref("users/"+request.userId)

.update({

coins: oldCoins + Number(request.coins)

});



database.ref("coinRequests/"+id)

.update({

status:"Approved"

});



alert("🪙 Coins Added Successfully");


});


});


}







// Reject Coin Request


function rejectCoins(id){


database.ref("coinRequests/"+id)

.update({

status:"Rejected"

});


alert("❌ Coin Request Rejected");


}
