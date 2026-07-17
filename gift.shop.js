// StarRoom Gift Shop System


// Load User Coins

auth.onAuthStateChanged((user)=>{


if(user){


database.ref("users/"+user.uid).once("value")

.then((snapshot)=>{


let data = snapshot.val();


let coinBox = document.getElementById("giftCoins");


if(coinBox){

coinBox.innerHTML = data.coins || 0;

}


});


}


});






// Send Gift Function

function sendGift(giftName, giftPrice){



let user = auth.currentUser;



if(!user){

alert("Please Login First");

return;

}





database.ref("users/"+user.uid).once("value")

.then((snapshot)=>{


let data = snapshot.val();


let currentCoins = data.coins || 0;



if(currentCoins < giftPrice){


alert("❌ Not Enough Coins");


return;


}




// Remove Coins

database.ref("users/"+user.uid).update({

coins: currentCoins - giftPrice

});






// Save Gift History

database.ref("giftHistory").push({


sender:user.uid,

gift:giftName,

price:giftPrice,

time:new Date().toString()


});



alert("🎁 "+giftName+" Sent Successfully");


});



}
