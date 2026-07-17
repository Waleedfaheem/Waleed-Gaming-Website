// StarRoom Admin Transfer Management System


let transferList = document.getElementById("transferList");



// Load Transfer Requests

database.ref("transfers")

.on("value",(snapshot)=>{


if(!transferList)return;


transferList.innerHTML="";



snapshot.forEach((child)=>{


let data = child.val();

let id = child.key;



transferList.innerHTML += `


<div class="transfer-card">


<h3>
👤 ${data.username || "User"}
</h3>


<p>
🆔 User ID: ${data.userId || ""}
</p>


<p>
💰 Amount: ${data.amount || 0}
</p>


<p>
Type: ${data.type || "Coins"}
</p>


<p>
Status: ${data.status || "Pending"}
</p>



<div class="transfer-actions">


<button class="approve-transfer" onclick="approveTransfer('${id}')">

Approve

</button>



<button class="reject-transfer" onclick="rejectTransfer('${id}')">

Reject

</button>



</div>



</div>


`;



});


});








// Approve Transfer


function approveTransfer(id){


database.ref("transfers/"+id)

.update({

status:"Approved"

});


alert("✅ Transfer Approved");


}







// Reject Transfer
