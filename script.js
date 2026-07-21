function login(){

const email = document.getElementById("email").value;

const password = document.getElementById("password").value;


if(email === "" || password === ""){

alert("Please enter email and password");

return;

}


auth.signInWithEmailAndPassword(email,password)

.then((userCredential)=>{

console.log("Login Successful");

window.location.href="dashboard.html";

})


.catch((error)=>{

alert(error.message);

});

}


// Google Login

function googleSignIn(){

auth.signInWithPopup(googleProvider)

.then((result)=>{

console.log("Google Login Successful");

window.location.href="dashboard.html";

})


.catch((error)=>{

alert(error.message);

});

// Facebook Login

function facebookSignIn(){

auth.signInWithPopup(facebookProvider)

.then((result)=>{

console.log("Facebook Login Successful");

window.location.href="dashboard.html";

})


.catch((error)=>{

alert(error.message);

});

}


// Logout Function

function logout(){

auth.signOut()

.then(()=>{

window.location.href="index.html";

})


.catch((error)=>{

alert(error.message);

});

}


// Check User Login Status

auth.onAuthStateChanged((user)=>{


if(user){

console.log("User Active:", user.email);


}else{


console.log("No User Login");


}


});
// Save User Data

function saveUserData(uid, data){

    database.ref("users/" + uid).update(data)

    .then(()=>{

        console.log("User Data Saved");

    })

    .catch((error)=>{

        alert(error.message);

    });

}



// Load User Data

function loadUserData(uid){

    database.ref("users/" + uid)

    .once("value")

    .then((snapshot)=>{

        if(snapshot.exists()){

            console.log(snapshot.val());

        }

    })

    .catch((error)=>{

        alert(error.message);

    });

}



// StarRoom Ready

console.log("✅ StarRoom Login System Ready");
}
