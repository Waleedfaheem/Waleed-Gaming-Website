// StarRoom Admin Gift Management System


let giftList = document.getElementById("giftList");




// Add Gift Function

function addGift(){


let name = document.getElementById("giftName").value;

let price = document.getElementById("giftPrice").value;

let image = document.getElementById("giftImage").value;



if(name=="" || price==""){

alert("Gift Name and Price Required");

return;

}




database.ref("gifts").push({


name:name,

price:Number(price),

image:image || "gift.png",

createdAt:new Date().toLocaleString()


})

.then(()=>{


alert("🎁 Gift Added Successfully");


document.getElementById("giftName").value="";

document.getElementById("giftPrice").value="";

document.getElementById("giftImage").value="";


});



}







// Load Gifts


database.ref("gifts")

.on("value",(snapshot)=>{


if(!giftList)return;



giftList.innerHTML="";



snapshot.forEach((child)=>{


let gift = child.val();

let id = child.key;



giftList.innerHTML += `


<div class="gift-card">


<img src="${gift.image}">


<h3>
🎁 ${gift.name}
</h3>


<p>
🪙 Price: ${gift.price} Coins
</p>



<button onclick="deleteGift('${id}')">

Delete

</button>



</div>


`;



});



});







// Delete Gift


function deleteGift(id){


database.ref("gifts/"+id)

.remove()

.then(()=>{


alert("Gift Deleted");


});


}
