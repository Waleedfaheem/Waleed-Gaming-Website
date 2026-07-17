// StarRoom Admin Dashboard System



// Load Admin Statistics


database.ref("users")

.on("value",(snapshot)=>{


let totalUsers = snapshot.numChildren();


let totalCoins = 0;

let totalPoints = 0;



snapshot.forEach((child)=>{


let data = child.val();



totalCoins += data.coins || 0;


totalPoints += data.yellowPoints || 0;



});



let usersBox=document.getElementById("totalUsers");

let coinsBox=document.getElementById("totalCoins");

let pointsBox=document.getElementById("totalPoints");



if(usersBox){

usersBox.innerHTML=totalUsers;

}


if(coinsBox){

coinsBox.innerHTML=totalCoins;

}


if(pointsBox){

pointsBox.innerHTML=totalPoints;

}



});






// Withdraw Count


database.ref("withdrawRequests")

.on("value",(snapshot)=>{


let box=document.getElementBy
