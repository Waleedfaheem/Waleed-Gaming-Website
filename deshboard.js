// ==========================
// StarRoom Dashboard
// ==========================

let coins = 10000;
let balance = 0;

const coinText = document.getElementById("coins");

function updateCoins(){

coinText.innerHTML = coins.toLocaleString();

}

updateCoins();

// ==========================
// Deposit Button
// ==========================

const depositBtn = document.querySelector(".deposit");

depositBtn.addEventListener("click",()=>{

alert("Deposit System Coming Soon");

});

// ==========================
// Withdraw Button
// ==========================

const withdrawBtn = document.querySelector(".withdraw");

withdrawBtn.addEventListener("click",()=>{

alert("Withdraw System Coming Soon");

});

// ==========================
// Coin Shop
// ==========================

const shopBtn = document.querySelector(".shop");

shopBtn.addEventListener("click",()=>{

alert("Coin Shop Opening...");

});

// ==========================
// Gift Button
// ==========================

const giftBtn = document.querySelector(".gift");

giftBtn.addEventListener("click",()=>{

alert("Gift Store Coming Soon");
// ==========================
// Daily Reward
// ==========================

const rewardCard = document.querySelector(".card:nth-child(2)");

rewardCard.addEventListener("click", () => {

coins += 500;

updateCoins();

alert("🎁 Daily Reward Claimed!\n+500 Coins");

saveData();

});

// ==========================
// Save Player Data
// ==========================

function saveData(){

localStorage.setItem("starroom_coins", coins);

localStorage.setItem("starroom_balance", balance);

}

// ==========================
// Load Player Data
// ==========================

function loadData(){

const savedCoins = localStorage.getItem("starroom_coins");

const savedBalance = localStorage.getItem("
});// ==========================
// Bottom Navigation
// ==========================

document.querySelectorAll(".bottom-nav a").forEach(item=>{

item.addEventListener("click",(e)=>{

console.log("Opening:",item.innerText);

});

});

// ==========================
// Profile
// ==========================

function openProfile(){

alert("👤 Profile Page Coming Soon");

}

// ==========================
// Team
// ==========================

function openTeam(){

alert("👥 Team Page Coming Soon");

}

// ==========================
// Leaderboard
// ==========================

function openLeaderboard(){

alert("🏆
