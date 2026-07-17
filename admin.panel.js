// StarRoom Admin Approval System


const requestsBox = document.getElementById("requestsBox");

const totalRequests = document.getElementById("totalRequests");



// Load Coin Requests

database.ref("coinRequests").on("value",(snapshot)=>{


if(!requestsBox) return;


requestsBox.innerHTML="";


let count = 0;



snapshot.forEach((child)=>{


let request = child.val();

let id = child.key;



if(request.status === "pending"){


count++;


requestsBox.innerHTML += `

<div class="request-card">


<h3>💎 Coin Request</h3>

<p>User ID:
${request.userID}
</p>


<p>Coins:
${request.coins}
</p>


<p>Amount:
${request.price} PKR
</p>


<p>Payment:
${request.paymentMethod}
</p>


<p>Transaction:
${request.transactionID}
</p>


<button class="approve"
onclick="approveRequest('${id}','${request.userID}',${request.coins})">

Approve

</button>



<button class="reject"
onclick="rejectRequest('${id}')">

Reject

</button>


</div>

`;

}


});


totalRequests.innerHTML=count;


});






// Approve Request

function approveRequest(requestID,userID,coins){



database.ref("users/"+userID).once("value")

.then((snapshot)=>{


let user = snapshot.val();


let oldCoins = user.coins || 0;


database.ref("users/"+userID).update({

coins: oldCoins + coins

});



database.ref("coinRequests/"+requestID).update({

status:"approved"

});


alert("✅ Coins Added Successfully");


});


}






// Reject Request

function rejectRequest(requestID){


database.ref("coinRequests/"+requestID).update({

status:"rejected"

});


alert("❌ Request Rejected");


}
