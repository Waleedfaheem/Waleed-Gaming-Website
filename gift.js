// StarRoom Gift System


let userCoins = 800;


// Send Gift Function

function sendGift(giftName, price){


if(userCoins < price){

alert("❌ Not enough Coins");

return;

}


// Deduct Coins

userCoins = userCoins - price;


// Update Coins Display

document.getElementById("coins").innerHTML = userCoins;



alert(
"🎁 You sent " + giftName +
"\n🪙 Remaining Coins: " + userCoins
);



// Save Gift Data

let giftData = {

gift: giftName,

price: price,

time: new Date().toString()

};


database.ref("gifts").push(giftData);



}
