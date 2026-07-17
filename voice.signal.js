// StarRoom WebRTC Firebase Signaling System


let roomRef = database.ref("voiceRooms/default");



// Create Voice Offer

async function createOffer(userId){


let pc = createPeer(userId);



let offer = await pc.createOffer();


await pc.setLocalDescription(offer);



roomRef.child("offers/"+userId).set({

type:offer.type,

sdp:offer.sdp

});


}






// Receive Offer

roomRef.child("offers").on("child_added", async(snapshot)=>{


let offer = snapshot.val();


let userId = snapshot.key;


if(offer && offer.type==="offer"){


let pc = createPeer(userId);



await pc.setRemoteDescription(offer);



let answer = await pc.createAnswer();


await pc.setLocalDescription(answer);



roomRef.child("answers/"+userId).set({

type:answer.type,

sdp:answer.sdp

});


}


});






// Receive Answer

roomRef.child("answers").on("child_added",async(snapshot)=>{


let answer=snapshot.val();


let userId=snapshot.key;


let pc=peerConnections[userId];


if(pc){


await pc.setRemoteDescription(answer);


}


});
