// StarRoom Admin Notification Manager


function sendNotification(){


let title = document.getElementById("notificationTitle").value;


let message = document.getElementById("notificationMessage").value;



if(title=="" || message==""){


alert("Please fill all fields");


return;


}




let notificationData = {


title:title,

message:message,

type:"admin",

time:new Date().toLocaleString()


};





database.ref("notifications").push(notificationData)

.then(()=>{


document.getElementById("status").innerHTML =
"✅ Notification Sent Successfully";



document.getElementById("notificationTitle").value="";


document.getElementById("notificationMessage").value="";



})

.catch((error)=>{


document.getElementById("status").innerHTML =
"❌ Error Sending Notification";


console.log(error);


});



}
