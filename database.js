// ======================================
// StarRoom Dashboard
// Part 1
// ======================================

auth.onAuthStateChanged((user) => {

if (!user) {

window.location.href = "index.html";

return;

}

database.ref("users/" + user.uid).once("value")

.then((snapshot) => {

if (snapshot.exists()) {

const data = snapshot.val();

const name = document.getElementById("userName");

const coins = document.getElementById("userCoins");

const balance = document.getElementById("userBalance");

if (name) name.innerHTML = data.name;

if (coins) coins.innerHTML = data.coins;

if (balance) balance.innerHTML = data.balance;

}

});

});
// ======================================
// StarRoom Dashboard
// Part 2
// ======================================

// Daily Reward

function claimDailyReward() {

const user = auth.currentUser;

if (!user) return;

database.ref("users/" + user.uid).once("value")

.then((snapshot) => {

const data = snapshot.val();

let coins = data.coins || 0;

coins += 900;

database.ref("users/" + user.uid).update({

coins: coins

});

alert("🎁 Daily Reward Claimed (+900 Coins)");

location.reload();

});

}

// Live Seat Reward

function claimLiveSeatReward() {

const user = auth.currentUser;

if (!user) return;

database.ref("users/" + user.uid).once("value")

.then((snapshot) => {

const data = snapshot.val();

let coins = data.coins || 0;

coins += 1200;

database.ref("users/" + user.uid).update({

coins: coins

});

alert("🎤 Live Seat Reward Claimed (+1200 Coins)");

location.reload();

});
// Reward Buttons

const dailyRewardBtn = document.getElementById("dailyRewardBtn");

if (dailyRewardBtn) {

dailyRewardBtn.addEventListener("click", claimDailyReward);

}

const liveRewardBtn = document.getElementById("liveRewardBtn");

if (liveRewardBtn) {

liveRewardBtn.addEventListener("click", claimLiveSeatReward);

}

// Logout Button

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

logoutBtn.addEventListener("click", function () {

logout();

});

}

// Welcome Text

auth.onAuthStateChanged((user) => {

if (user) {

const welcome = document.getElementById("welcomeUser");

if (welcome) {

welcome.innerHTML = "Welcome " + user.email;

}

}

});

console.log("Dashboard Loaded Successfully");
    }
