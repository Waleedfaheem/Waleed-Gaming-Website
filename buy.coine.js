// StarRoom Buy Coins System


function buyCoins(coins, price){


let method = prompt(
"Select Payment Method:\n1 = EasyPaisa\n2 = JazzCash"
);


if(method !== "1" && method !== "2"){

alert("Please select payment method");

return;

}



let transaction = prompt(
"Enter Your Transaction ID"
);


if(transaction==""){

alert("Enter Transaction ID");

return;

}



let user = auth.currentUser;


if(!user){

alert("Please Login First");

return;

}



let paymentMethod;


if(method=="1"){

paymentMethod="EasyPaisa";

}else{

paymentMethod="JazzCash";

}



database.ref("coinRequests").push({

userID:user.uid,

coins:coins,

price:price,

paymentMethod:paymentMethod,

transactionID:transaction,

status:"pending",

date:new Date().toString()

})
.then(()=>{


alert(
"✅ Request Submitted\nAdmin will verify and add coins."
);


});


}




// WhatsApp Button

function openWhatsApp(){


let link="YOUR_WHATSAPP_GROUP_LINK";


window.open(link,"_blank");


}
