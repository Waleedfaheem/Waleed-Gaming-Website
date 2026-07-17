// StarRoom Notification System


let notificationList = document.getElementById("notificationList");



// Load Notifications

database.ref("notifications")

.orderByChild("time")

.on("value",(snapshot)=>{


if(!notificationList) return;


notificationList.innerHTML="";



snapshot.forEach((child)=>{


let data = child.val();



notificationList.innerHTML += `

<div class="notification-card">


<h3>
${data.title || "StarRoom"}
</h3>


<p>
${data.message || ""}
</p>


<small>
${data.time || ""}
</small>


</div>

`;



});



});
