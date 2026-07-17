let coins = 800;

function recharge(){

let amount = prompt("Enter coins amount to recharge:");

if(amount !== null && amount !== ""){

coins += Number(amount);

document.getElementById("coins").innerText = coins;

addTransaction("Recharge +" + amount + " Coins");

alert("Recharge Successful");

}

}


function giftSpend(){

let spend = prompt("Enter coins used for gift:");

if(spend !== null && spend !== ""){

if(Number(spend) <= coins){

coins -= Number(spend);

document.getElementById("coins").innerText = coins;

addTransaction("Gift Sent -" + spend + " Coins");

alert("Gift Sent Successfully");

}else{

alert("Not enough Coins");

}

}

}


function history(){

alert("Transaction History Opened");

}


function addTransaction(text){

let list = document.getElementById("transactionList");

let item = document.createElement("li");

item.innerText = text;

list.appendChild(item);

}
// StarRoom Yellow Points Wallet System


let yellowPoints = 0;


// Load User Points

auth.onAuthStateChanged((user)=>{

if(user){


database.ref("users/"+user.uid).once("value")
.then((snapshot)=>{


let data = snapshot.val();


if(data){


yellowPoints = data.yellowPoints || 0;


let pointBox = document.getElementById("yellowPoints");


if(pointBox){

pointBox.innerHTML = yellowPoints + " 🟡";

}


}


});


}

});




// Daily Live Reward

function addLiveReward(){


let user = auth.currentUser;


if(!user){

alert("Please Login");

return;

}


database.ref("users/"+user.uid).once("value")
.then((snapshot)=>{


let data = snapshot.val();


let points = data.yellowPoints || 0;


database.ref("users/"+user.uid).update({

yellowPoints: points + 1200

});


alert("🎤 Live Reward +1200 Yellow Points");


});


}




// Withdraw Request

function withdrawRequest(){


let user = auth.currentUser;


if(!user){

alert("Please Login");

return;

}


database.ref("users/"+user.uid).once("value")
.then((snapshot)=>{


let data = snapshot.val();


let points = data.yellowPoints || 0;


if(points < 100000){


alert("Need 100,000 Yellow Points");


return;


}



database.ref("withdrawRequests").push({

userId:user.uid,

username:data.username,

points:100000,

amount:3000,

status:"Pending",

date:new Date().toString()


});


alert("Withdraw Request Sent");


});


}
