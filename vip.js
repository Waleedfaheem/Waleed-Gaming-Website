// StarRoom VIP System


auth.onAuthStateChanged((user)=>{


if(!user){

return;

}



database.ref("users/"+user.uid)

.once("value")

.then((snapshot)=>{


let data = snapshot.val();



let coins = data.coins || 0;

let points = data.yellowPoints || 0;



let vip = "VIP 0";




// VIP Calculation


if(coins >= 500000){

vip="VIP 4";

}

else if(coins >= 100000){

vip="VIP 3";

}

else if(coins >= 50000){

vip="VIP 2";

}

else if(coins >= 10000){

vip="VIP 1";

}




if(document.getElementById("vipLevel")){

document.getElementById("vipLevel").innerHTML = vip;

}



if(document.getElementById("vipCoins")){

document.getElementById("vipCoins").innerHTML = coins;

}



if(document.getElementById("yellowPoints")){

document.getElementById("yellowPoints").innerHTML = points;

}




// Save VIP Level

database.ref("users/"+user.uid).update({

vipLevel:vip

});



});


});
